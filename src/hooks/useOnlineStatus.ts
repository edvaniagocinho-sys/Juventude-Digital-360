import { useState, useEffect } from 'react';

// Key for manual simulation of offline mode (useful for testing and users in remote areas with unstable networks)
const SIMULATED_OFFLINE_KEY = 'jd360_simulated_offline';

export function useOnlineStatus() {
  const [isRealOnline, setIsRealOnline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(() => {
    try {
      return localStorage.getItem(SIMULATED_OFFLINE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleOnline = () => setIsRealOnline(true);
    const handleOffline = () => setIsRealOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleSimulatedOffline = () => {
    const nextState = !isSimulatedOffline;
    setIsSimulatedOffline(nextState);
    try {
      if (nextState) {
        localStorage.setItem(SIMULATED_OFFLINE_KEY, 'true');
      } else {
        localStorage.removeItem(SIMULATED_OFFLINE_KEY);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const isOnline = isRealOnline && !isSimulatedOffline;

  return {
    isOnline,
    isRealOnline,
    isSimulatedOffline,
    toggleSimulatedOffline
  };
}
