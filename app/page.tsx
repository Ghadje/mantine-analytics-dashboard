'use client';

import {
  Box,
  Button,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconPlayerPlay,
} from '@tabler/icons-react';
import Link from 'next/link';

import GuestLayout from '@/layout/Guest';
import {
  PATH_AUTH,
} from '@/routes';

import classes from './page.module.css';


export default function Home() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <>
      <>
        <title>DesignSparx | Website UI Kit</title>
        <meta
          name="description"
          content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </>
      <GuestLayout>
        <Box className={classes.hero}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Stack>
                <Title className={classes.title}>
                  Bienvenue, Ceci est le tableau de bord{' '}
                  <Text component="span" inherit className={classes.highlight}>
                  Iris{' '}
                  </Text>
                  , pour les comercials.
                </Title>
                <Group my="lg">
                  <Button
                    component={Link}
                    href={PATH_AUTH.signin}
                    size="md"
                    rightSection={<IconPlayerPlay size={18} />}
                    color="ocean-orange"
                  >
                    Commencer
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Image
                src={
                  colorScheme === 'dark'
                    ? '/thumbnail-img.jpg'
                    : '/thumbnail-img-b.jpg'
                }
                alt="/"
                radius="md"
              />
            </Grid.Col>
          </Grid>
        </Box>
      </GuestLayout>
    </>
  );
}
