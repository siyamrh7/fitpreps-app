import React from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { YStack } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function VerifyPayment() {
  const { redirectUrl } = useLocalSearchParams();
  const handleNavigationChange = (navState: any) => {
    const currentUrl = navState.url;
    console.log('🔗 Navigated to new:', currentUrl);
 const router = useRouter();
    try {
      const url = new URL(currentUrl);

      const hasPaymentSuccess = currentUrl.includes('fitpreps.nl');
      const paymentId = url.searchParams.get('id');
console.log(paymentId, 'paymentId');
console.log(hasPaymentSuccess, 'hasPaymentSuccess');
      if ( paymentId) {
        // console.log('🎉 Payment Success Detected!');
        // console.log('🧾 Payment ID:', paymentId);
        // 🚀 Redirect or handle success logic here
        // Example: router.replace('/success') or Toast.show(...)
        router.replace({
          pathname: '/subscriptionplaced',
          params: {
            type: 'subscription',
            id: paymentId,
          },
        });
      }
    } catch (err) {
      console.error('❌ URL parsing failed:', err);
    }
  };

  return (
    <>
      <YStack flex={1}>
        <StatusBar style="dark" backgroundColor="white" />
        <SafeAreaView style={{ flex: 1 }}>
          <YStack flex={1}>
            <WebView
              style={{ flex: 1, width: '100%', height: '100%' }}
              source={{ uri: redirectUrl as string }}
              here
              startInLoadingState={true}
              onNavigationStateChange={handleNavigationChange}
              renderLoading={() => (
                <ActivityIndicator
                  size="large"
                  color="#FD4F01"
                  style={{ flex: 1, justifyContent: 'center' }}
                />
              )}
            />
          </YStack>
        </SafeAreaView>
      </YStack>
    </>
  );
}
