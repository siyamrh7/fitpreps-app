import { Stack } from 'expo-router';

export default function SubscriptionLayout() {
  return (
    <Stack>
      <Stack.Screen name="upgradeSubscription" options={{ headerShown: false }} />
    </Stack>
  );
}
