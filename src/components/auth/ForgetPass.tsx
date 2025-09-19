import { Text, YStack, XStack, Input, Button, View } from 'tamagui';
import Fitpreps from 'public/images/logo/fitpreps.svg';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function ForgetPass({ account }: { account: string }) {
  return (
    <YStack mt={300} flex={1} alignItems="center" justifyContent="center" gap="$7" px={28}>
      <Fitpreps />
      <Text color="#1E1F20" fontSize={16} fontWeight={500}>
      Vul je e-mailadres in om je wachtwoord te herstellen.</Text>
      <Input
        gap={8}
        flex={1}
        w={'100%'}
        px={14}
        h="45"
        borderRadius={8}
        borderColor="#EDEEF1"
        backgroundColor="white"
        shadowOffset={{ width: 0, height: 1 }}
        shadowRadius={2}
        shadowOpacity={1}
        shadowColor="rgba(221, 223, 227, 0.1)"
        elevation={0.5}
        borderWidth={0.6}
        placeholder="E-mailadres"
      />
      {account !== 'recover-password' && (
        <XStack alignItems="center" justifyContent="center">
          <Button
            onPress={() => router.replace('/(auth)/recover-password')}
            minWidth={0}
            px="$5"
            backgroundColor="#FD4F01"
            color="white"
            fontWeight="700"
            borderRadius={8}
            shadowColor="rgba(10, 13, 18, 0.05)"
            shadowOffset={{ width: 0, height: 1 }}
            shadowRadius={2}
            shadowOpacity={1}
            elevation={1}
            height={44}
            fontSize={16}>
            Herstel wachtwoord
          </Button>
        </XStack>
      )}
      {account !== 'recover-password' && (
        <XStack alignItems="center" justifyContent="center" gap={12}>
          <Text fontSize={16} color="#1E1F20" fontWeight={500} textAlign="center">
          Ik weet mijn wachtwoord weer.
          </Text>
          <XStack alignItems="center" justifyContent="flex-end">
            <TouchableOpacity onPress={() => router.replace('/(auth)/log-in')}>
              <Text
                fontSize={16}
                fontWeight={700}
                borderBottomWidth={1}
                borderBottomColor="#FD4F01"
                color="#FD4F01">
                Inloggen
              </Text>
            </TouchableOpacity>
          </XStack>
        </XStack>
      )}
      {account === 'recover-password' && (
        <View gap="$7" flexDirection="column" flex={1} w="100%">
          <YStack w="100%" px="$4" bg="#E5F8EA" borderRadius={12} py="$3">
            <Text color="#009A21" fontSize={16} fontWeight={700} textAlign="center">
            Check je inbox en volg de link om je wachtwoord te wijzigen.
             </Text>
          </YStack>
          <XStack gap={8} alignItems="center" justifyContent="center">
            <Text color="#1E1F20" fontSize={16} fontWeight={500}>
              00:30
            </Text>
            <TouchableOpacity>
              <Text
                color="#FD4F01"
                fontSize={16}
                fontWeight={700}
                borderBottomWidth={1}
                borderBottomColor={'#FD4F01'}>
                Opnieuw versturen
              </Text>
            </TouchableOpacity>
          </XStack>
        </View>
      )}
    </YStack>
  );
}
