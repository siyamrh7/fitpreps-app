import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, XStack, YStack } from 'tamagui';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import SelectSubscriptionPlan from '~/src/components/subscription.tsx/SelectSubscriptionplan';
import WeeklyVsMonthlyPlan from '~/src/components/subscription.tsx/WeeklyVsMonthlyPlan';
import SubscriptionFooterInfo from '~/src/components/subscription.tsx/SubscriptionFooterInfo';
import { useSelector } from 'react-redux';
import { RootState } from '~/src/store';
export default function Home() {
  const user = useSelector((state: RootState) => state.user.user?.user);
  const { product } = useLocalSearchParams();
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <YStack gap="$7" flex={1}>
            <XStack alignItems="center" gap={8} py="$4">
              <TouchableOpacity onPress={() => router.replace('/(protected)/(navigator)/(tabs)')}>
                <AntDesign name="left" size={24} color="black" />
              </TouchableOpacity>
              <Text fontWeight={700} fontSize={20} color="#1E1F20">
                Select Subscription
              </Text>
            </XStack>
            <YStack>
              <Text fontSize={20} fontWeight={700} color="#1E1F20">
              Hey,{' '}
                <Text fontSize={20} fontWeight={700} color="#FD4F01">
                  {user?.metadata.first_name}!
                </Text>
              </Text>
              <Text fontSize={14} fontWeight={500} color="#1E1F20">
              Kies hieronder je plan en begin met jou abonnement. Geniet van verse, smakelijke maaltijden aan huis - én extra voordeel.



              </Text>
            </YStack>
            <SelectSubscriptionPlan product={product as string} />
            <WeeklyVsMonthlyPlan />
            <SubscriptionFooterInfo />
          </YStack>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 100,
    backgroundColor: 'white',
  },
});
