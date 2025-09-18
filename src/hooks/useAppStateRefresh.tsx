import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { refreshUserData } from '../utils/userDataRefresh';

/**
 * Hook to refresh user data when app comes back to foreground
 * This ensures user data is always up-to-date when the user returns to the app
 */
export const useAppStateRefresh = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      // If app is coming to foreground and was in background
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground, refreshing user data...');
        refreshUserData().catch((error) => {
          console.log('Failed to refresh user data on app state change:', error);
        });
      }
      
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription?.remove();
    };
  }, []);
};
