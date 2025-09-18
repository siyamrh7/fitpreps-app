import React from 'react';
import { View, Text } from 'tamagui';
import { useUserInitialization } from '../hooks/useUserInitialization';
import { useAppStateRefresh } from '../hooks/useAppStateRefresh';

interface AppInitializerProps {
  children: React.ReactNode;
}

export const AppInitializer: React.FC<AppInitializerProps> = ({ children }) => {
  const { isLoading, isInitialized } = useUserInitialization();
  
  // Set up app state refresh for when user returns to app
  useAppStateRefresh();
  
  // Show loading state while initializing user data
  if (isLoading || !isInitialized) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return <>{children}</>;
};
