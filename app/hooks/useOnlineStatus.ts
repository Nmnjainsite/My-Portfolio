// app/hooks/useOnlineStatus.ts
"use client";

import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial status
    setIsOnline(navigator.onLine);

    // Event handlers
    const handleOnline = () => {
      setIsOnline(true);
      console.log('🟢 Connection restored!');
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log('🔴 Connection lost!');
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}