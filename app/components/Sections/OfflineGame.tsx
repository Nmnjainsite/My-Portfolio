// app/components/OfflineGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface OfflineGameProps {
  isDark: boolean;
}

interface Bird {
  x: number;
  y: number;
  velocity: number;
  size: number;
}

interface Pipe {
  x: number;
  topHeight: number;
  gap: number;
  width: number;
  passed: boolean;
}

export default function OfflineGame({ isDark }: OfflineGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameStateRef = useRef({
    bird: { x: 100, y: 250, velocity: 0, size: 20 } as Bird,
    pipes: [] as Pipe[],
    score: 0,
    frameCount: 0,
    isPlaying: false,
    animationId: 0,
  });

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem("flappyHighScore");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  const startGame = () => {
    gameStateRef.current = {
      bird: { x: 100, y: 250, velocity: 0, size: 20 },
      pipes: [],
      score: 0,
      frameCount: 0,
      isPlaying: true,
      animationId: 0,
    };
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
  };

  const jump = () => {
    if (!gameStateRef.current.isPlaying) return;
    gameStateRef.current.bird.velocity = -6;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Game constants
    const GRAVITY = 0.4;
    const PIPE_SPEED = 2;
    const PIPE_GAP = 150;
    const PIPE_WIDTH = 60;
    const PIPE_FREQUENCY = 150;

    // Create pipe
    const createPipe = () => {
      const minHeight = 50;
      const maxHeight = canvas.height - PIPE_GAP - 50;
      const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;

      gameStateRef.current.pipes.push({
        x: canvas.width,
        topHeight,
        gap: PIPE_GAP,
        width: PIPE_WIDTH,
        passed: false,
      });
    };

    // Check collision
    const checkCollision = (): boolean => {
      const bird = gameStateRef.current.bird;

      // Ground and ceiling
      if (bird.y + bird.size > canvas.height || bird.y - bird.size < 0) {
        return true;
      }

      // Pipes
      for (const pipe of gameStateRef.current.pipes) {
        if (
          bird.x + bird.size > pipe.x &&
          bird.x - bird.size < pipe.x + pipe.width
        ) {
          if (
            bird.y - bird.size < pipe.topHeight ||
            bird.y + bird.size > pipe.topHeight + pipe.gap
          ) {
            return true;
          }
        }
      }

      return false;
    };

    // Draw bird
    const drawBird = () => {
      const bird = gameStateRef.current.bird;
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, bird.size, 0, Math.PI * 2);
      ctx.fill();

      // Eye
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(bird.x + 5, bird.y - 5, 3, 0, Math.PI * 2);
      ctx.fill();

      // Beak
      ctx.fillStyle = "#FF8C00";
      ctx.beginPath();
      ctx.moveTo(bird.x + bird.size, bird.y);
      ctx.lineTo(bird.x + bird.size + 10, bird.y - 5);
      ctx.lineTo(bird.x + bird.size + 10, bird.y + 5);
      ctx.closePath();
      ctx.fill();
    };

    // Draw pipe
    const drawPipe = (pipe: Pipe) => {
      // Gradient for pipes
      const gradient = ctx.createLinearGradient(
        pipe.x,
        0,
        pipe.x + pipe.width,
        0
      );
      gradient.addColorStop(0, isDark ? "#10b981" : "#059669");
      gradient.addColorStop(1, isDark ? "#059669" : "#047857");

      // Top pipe
      ctx.fillStyle = gradient;
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);

      // Top pipe cap
      ctx.fillStyle = isDark ? "#047857" : "#065f46";
      ctx.fillRect(pipe.x - 5, pipe.topHeight - 20, pipe.width + 10, 20);

      // Bottom pipe
      ctx.fillStyle = gradient;
      ctx.fillRect(
        pipe.x,
        pipe.topHeight + pipe.gap,
        pipe.width,
        canvas.height
      );

      // Bottom pipe cap
      ctx.fillStyle = isDark ? "#047857" : "#065f46";
      ctx.fillRect(pipe.x - 5, pipe.topHeight + pipe.gap, pipe.width + 10, 20);
    };

    // Draw background
    const drawBackground = () => {
      // Sky
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (isDark) {
        skyGradient.addColorStop(0, "#1e293b");
        skyGradient.addColorStop(1, "#334155");
      } else {
        skyGradient.addColorStop(0, "#87CEEB");
        skyGradient.addColorStop(1, "#E0F6FF");
      }
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clouds
      ctx.fillStyle = isDark
        ? "rgba(255,255,255,0.1)"
        : "rgba(255,255,255,0.7)";
      const cloudY = [80, 150, 200];
      const cloudX = [
        (gameStateRef.current.frameCount * 0.2) % canvas.width,
        (gameStateRef.current.frameCount * 0.15 + 200) % canvas.width,
        (gameStateRef.current.frameCount * 0.1 + 400) % canvas.width,
      ];

      cloudX.forEach((x, i) => {
        ctx.beginPath();
        ctx.arc(x, cloudY[i], 30, 0, Math.PI * 2);
        ctx.arc(x + 25, cloudY[i], 35, 0, Math.PI * 2);
        ctx.arc(x + 50, cloudY[i], 30, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ground
      ctx.fillStyle = isDark ? "#0f172a" : "#8B4513";
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

      // Grass
      ctx.fillStyle = isDark ? "#065f46" : "#228B22";
      ctx.fillRect(0, canvas.height - 60, canvas.width, 10);
    };

    // Game loop
    const gameLoop = () => {
      if (!gameStateRef.current.isPlaying) return;

      // Draw background
      drawBackground();

      const bird = gameStateRef.current.bird;

      // Update bird
      bird.velocity += GRAVITY;
      bird.y += bird.velocity;

      // Create pipes
      gameStateRef.current.frameCount++;
      if (gameStateRef.current.frameCount % PIPE_FREQUENCY === 0) {
        createPipe();
      }

      // Update and draw pipes
      gameStateRef.current.pipes.forEach((pipe, index) => {
        pipe.x -= PIPE_SPEED;

        // Check if passed
        if (!pipe.passed && pipe.x + pipe.width < bird.x) {
          pipe.passed = true;
          gameStateRef.current.score++;
          setScore(gameStateRef.current.score);
        }

        // Remove off-screen pipes
        if (pipe.x + pipe.width < 0) {
          gameStateRef.current.pipes.splice(index, 1);
        }

        drawPipe(pipe);
      });

      // Draw bird
      drawBird();

      // Check collision
      if (checkCollision()) {
        gameStateRef.current.isPlaying = false;
        setGameOver(true);

        // Update high score
        if (gameStateRef.current.score > highScore) {
          setHighScore(gameStateRef.current.score);
          localStorage.setItem(
            "flappyHighScore",
            gameStateRef.current.score.toString()
          );
        }
        return;
      }

      // Draw score
      ctx.fillStyle = isDark ? "#fff" : "#000";
      ctx.font = "bold 48px Arial";
      ctx.textAlign = "center";
      ctx.fillText(gameStateRef.current.score.toString(), canvas.width / 2, 80);

      gameStateRef.current.animationId = requestAnimationFrame(gameLoop);
    };

    // Start game loop if playing
    if (gameStarted && !gameOver) {
      gameStateRef.current.isPlaying = true;
      gameLoop();
    }

    // Input handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };

    const handleClick = () => jump();
    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      jump();
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchstart", handleTouch);
      cancelAnimationFrame(gameStateRef.current.animationId);
    };
  }, [gameStarted, gameOver, isDark, highScore]);

  return (
    <div className="fixed inset-0 z-50">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Offline Indicator */}
      <div className="absolute top-6 left-6 z-10">
        <div
          className={`${
            isDark ? "bg-slate-900/90" : "bg-white/90"
          } backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border-2 ${
            isDark ? "border-red-500" : "border-red-400"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Status
              </p>
              <p
                className={`text-lg font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                🔴 Offline
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* High Score */}
      <div className="absolute top-6 right-6 z-10">
        <div
          className={`${
            isDark ? "bg-slate-900/90" : "bg-white/90"
          } backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border-2 ${
            isDark ? "border-yellow-500" : "border-yellow-400"
          }`}
        >
          <p
            className={`text-sm font-medium ${
              isDark ? "text-slate-400" : "text-slate-600"
            } text-center`}
          >
            Best Score
          </p>
          <p
            className={`text-3xl font-bold ${
              isDark ? "text-yellow-400" : "text-yellow-600"
            } text-center`}
          >
            🏆 {highScore}
          </p>
        </div>
      </div>

      {/* Start Screen */}
      {!gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm">
          <div
            className={`${
              isDark ? "bg-slate-900/95" : "bg-white/95"
            } backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-lg mx-4 border-4 ${
              isDark ? "border-blue-500" : "border-blue-400"
            } animate-[fadeIn_0.5s_ease-out]`}
          >
            <div className="text-center space-y-6">
              <div className="text-7xl mb-4 animate-bounce">🐦</div>

              <h1
                className={`text-5xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                } mb-2`}
              >
                No Internet!
              </h1>

              <p
                className={`text-xl ${
                  isDark ? "text-slate-300" : "text-slate-700"
                } mb-4`}
              >
                Play Flappy Bird while waiting for connection
              </p>

              <div
                className={`${
                  isDark ? "bg-slate-800/80" : "bg-blue-50"
                } rounded-2xl p-6 space-y-3`}
              >
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  } mb-3`}
                >
                  🎮 How to Play
                </h3>
                <div
                  className={`text-left ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  } space-y-2`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👆</span>
                    <span>Click or Tap to fly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⌨️</span>
                    <span>Press SPACE or ↑</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span>
                    <span>Avoid the green pipes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⭐</span>
                    <span>Score points by passing</span>
                  </div>
                </div>
              </div>

              <button
                onClick={startGame}
                className="w-full mt-6 px-8 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-2xl font-bold rounded-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Start Game 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-sm">
          <div
            className={`${
              isDark ? "bg-slate-900/95" : "bg-white/95"
            } backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-md mx-4 border-4 ${
              isDark ? "border-red-500" : "border-red-400"
            } animate-[fadeIn_0.3s_ease-out]`}
          >
            <div className="text-center space-y-6">
              <div className="text-7xl mb-4">💥</div>

              <h2
                className={`text-5xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Game Over!
              </h2>

              <div
                className={`${
                  isDark ? "bg-slate-800/80" : "bg-slate-100"
                } rounded-2xl p-6 space-y-2`}
              >
                <p
                  className={`text-lg ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Your Score
                </p>
                <p
                  className={`text-6xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {score}
                </p>

                {score === highScore && score > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <p className="text-yellow-500 text-xl font-bold animate-pulse">
                      🎉 New High Score! 🎉
                    </p>
                  </div>
                )}

                {highScore > score && (
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <p
                      className={`text-sm ${
                        isDark ? "text-slate-500" : "text-slate-600"
                      }`}
                    >
                      Best: {highScore}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={startGame}
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
              >
                Play Again 🔄
              </button>
            </div>
          </div>
        </div>
      )}

      {/* In-Game Instructions */}
      {gameStarted && !gameOver && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div
            className={`${
              isDark ? "bg-slate-900/80" : "bg-white/80"
            } backdrop-blur-lg px-8 py-4 rounded-full shadow-xl border-2 ${
              isDark ? "border-blue-500" : "border-blue-400"
            }`}
          >
            <p
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-slate-900"
              } animate-pulse`}
            >
              Press SPACE or Click to Fly! 🐦
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
