import { Text, YStack, Image, XStack, Button } from 'tamagui';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

export default function SubscriptionSuccess() {
  return (
    <YStack flex={1} bg="white">
      <YStack flex={1} position="relative" width="100%" aspectRatio={390 / 844}>
        <Image
          source={require('public/images/orderplaced.png')}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
          resizeMode="cover"
        />
        <SafeAreaView style={{ flex: 1 }}>
          <BlurView
            intensity={60}
            tint="light"
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
          >
            <YStack
              bg="linear-gradient(0deg, rgba(255, 184, 23, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)"
              flex={1}
              px="$4"
              py="$2"
            >
              <YStack
                style={{ borderRadius: 12, paddingVertical: 16 }}
                gap="$7"
              >
                <YStack>
                  <Text fontSize={24} textAlign="center" fontWeight="700" color="#009A21">
                    Awesome!
                  </Text>
                  <Text fontSize={16} fontWeight={500} color="#1E1F20" textAlign="center">
                    You have successfully started your subscription! 
                  </Text>
                </YStack>
                <XStack justifyContent="center">
                  <Button
                    onPress={() => {
                      router.replace('/(protected)/(navigator)/(tabs)/meals');
                    }}
                    minWidth={164}
                    backgroundColor="#FD4F01"
                    borderRadius={8}
                    color="white"
                    fontWeight={700}
                  >
                    Explore Meals
                  </Button>
                </XStack>
              </YStack>
            </YStack>
          </BlurView>
        </SafeAreaView>
      </YStack>
    </YStack>
  );
}


