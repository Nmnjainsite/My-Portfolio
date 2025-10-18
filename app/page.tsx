'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Navigation from './components/Navigation';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import OfflineGame from './components/Sections/OfflineGame';

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isOnline, setIsOnline] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Handle online/offline status
  useEffect(() => {
    setIsMounted(true);
    setIsOnline(window.navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      console.log('Back online!');
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log('You are offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isMounted) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(isDark ? 0x0f172a : 0xffffff, 0.1);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 30;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: isDark ? 0x3b82f6 : 0x2563eb,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      particles.position.x = mouseX * 5;
      particles.position.y = mouseY * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDark, isMounted]);

  // Show offline game when disconnected
  if (!isOnline) {
    return <OfflineGame />;
  }

  return (
    <div
      className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
        } transition-colors duration-300`}
    >
      {/* Three.js Background */}
      <div
        ref={mountRef}
        className="fixed inset-0 -z-10"
        style={{ width: '100%', height: '100vh' }}
      />

      {/* Navigation */}
      <Navigation
        isDark={isDark}
        setIsDark={setIsDark}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Page Content */}
      <main className="relative z-10 mt-4">
        {currentPage === 'home' && <Hero setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} isDark={isDark} />
    </div>
  );
}