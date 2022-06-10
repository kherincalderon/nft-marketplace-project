import React from "react";
import {
  Stack,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  HStack,
  Avatar,
} from "@chakra-ui/react";

const Collections = () => {
  return (
    <Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: "40px", md: "80px" }}
      >
        <GridItem>
          <Stack marginBottom="16px">
            <Image
              src="https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FFtZWWUOArzD6WPyQ97rumWFhxm8IxFHNYg0Jucx0TdJ31q3VVDqnJ4nFu1RdC68fYEnFtvvtdoT2PrqFhyxDb3jcVXA3c_QfJnpiBNM%3Ds10000?fit=max&h=2500&w=2500&auto=format&s=cd1c4918eb5274f218762b7ebcc5c668"
              borderRadius="24px"
              objectFit="cover"
              height="120px"
            />
          </Stack>
          <Grid templateColumns="1fr 1fr 1fr" gap="16px" marginBottom="16px">
            <Image
              src="https://lh3.googleusercontent.com/PiXpZOMKpCvqbgbR1OTlwT7kGHB6J6o22iS21NEMna4OZw9F4BipagBgliXtNsf92i4S0e9ymdn_s_tsz74VmZuZwmrqulN_erwE"
              borderRadius="16px"
              objectFit="cover"
            />
            <Image
              src="https://lh3.googleusercontent.com/yW5Gj8CAG7ogHFUPQipQK6hzQUN4giY-I8QeXIVyBx5OADzl-bkBVj7mM4vfdGybKmnjjeLYF_neKB66XikxLmMkJTjlUJWYQ1vy9hE=w417"
              borderRadius="16px"
              objectFit="cover"
            />
            <Image
              src="https://lh3.googleusercontent.com/SYYTIm5c1z9OZ9mSNoR5lp6V_kYbHjH0ijrzoZnJNEPs7kdZVIsLgE9xFpQ6bLZ5reiEg88HG9YnxdEUYd8yAE4aYCtk6cu2wa19=w417"
              borderRadius="16px"
              objectFit="cover"
            />
          </Grid>
          <Stack spacing="8px">
            <Text fontSize="xl" fontWeight="600" color="white">
              Invisible Friends
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack alignItems="center" spacing="8px">
                <Avatar
                  src="https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FlW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9%3Ds10000?fit=max&h=120&w=120&auto=format&s=c8d351eaea890d88b1ca0de27716f7bc"
                  size="sm"
                />
                <Text fontSize="sm" fontWeight="500" color="white">
                  by Markus Magnusson
                </Text>
              </HStack>
              <Text fontSize="sm" fontWeight="500" color="white">
                5K ITEMS
              </Text>
            </Box>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack marginBottom="16px">
            <Image
              src="https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2Fi5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs%3Ds10000?fit=max&h=2500&w=2500&auto=format&s=09f8240e4e777c5a9aa20f32bd6e8148"
              borderRadius="24px"
              objectFit="cover"
              height="120px"
            />
          </Stack>
          <Grid templateColumns="1fr 1fr 1fr" gap="16px" marginBottom="16px">
            <Image
              src="https://img.seadn.io/files/0975938f3bfa9de8ef6d0aaf56904281.png?fit=max&auto=format&w=600"
              borderRadius="16px"
              objectFit="cover"
            />
            <Image
              src="https://img.seadn.io/files/ed1409d2d2008aa99ac77a97050be6f7.png?fit=max&auto=format&h=720&w=720"
              borderRadius="16px"
              objectFit="cover"
            />
            <Image
              src="https://img.seadn.io/files/65803eef9bde1b76f0df2b649c759901.png?fit=max&auto=format&h=720&w=720"
              borderRadius="16px"
              objectFit="cover"
            />
          </Grid>
          <Stack spacing="8px">
            <Text fontSize="xl" fontWeight="600" color="white">
              Bored Ape Yacht Club
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack alignItems="center" spacing="8px">
                <Avatar
                  src="https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FJu9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB%3Ds10000?fit=max&h=120&w=120&auto=format&s=9719c84d198704a4b1bf7519f6f52256"
                  size="sm"
                />
                <Text fontSize="sm" fontWeight="500" color="white">
                  by Yuga Labs
                </Text>
              </HStack>
              <Text fontSize="sm" fontWeight="500" color="white">
                10K ITEMS
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Collections;
