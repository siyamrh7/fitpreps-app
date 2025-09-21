import React from 'react';
import { Button, Image, Text, XStack, YStack } from 'tamagui';
import ArrowNarrowUpRight from 'public/images/arrow-narrow-up-right.svg';
import { shadows } from '~/src/constant';
export default function WeeklyOffer() {
  return (
    <>
      <Text textAlign="center" fontSize={24} fontWeight={800}>
      WEEKDEAL – MIS ‘M NIET
      </Text>
      <YStack gap="$7" bg="#FAD759" borderRadius={12} overflow="hidden">
        <XStack w="100%">
          <Image
            width={363}
            height={233}
            src={require('public/images/home/intro-products/Fitpreps (35) 2.png')}
          />
        </XStack>
        <YStack gap="$5" px="$4" py="$5">
          <Text textAlign="center" fontSize={20} fontWeight={700}>
          Verse maaltijden. Zero prep.
          </Text>
          <Text textAlign="center" fontSize={14} fontWeight={500}>
          Bestel deze week een meal plan en pak 25% korting op elke maaltijd of vitamin pack in je winkelmand.

          </Text>
          <Text textAlign="center" fontSize={14} fontWeight={500}>Gebruik code FITPREPS25 bij het afrekenen. Deze deal eindigt zondag, dus vul je koelkast, stack je shelf en keep moving.</Text>
          <XStack alignItems="center" justifyContent="center">
            <Button
              bg="#FD4F01"
              {...shadows.small}
              color="white"
              fontSize={16}
              fontWeight={700}
              px={20}
              iconAfter={<ArrowNarrowUpRight />}>
              Gebruik de code nu
            </Button>
          </XStack>
        </YStack>
      </YStack>
    </>
  );
}
