'use client';

import {
  Box,
  Button,
  Grid,
  Group,
  Image,
  Spoiler,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconPlayerPlay,
} from '@tabler/icons-react';
import Link from 'next/link';

import GuestLayout from '@/layout/Guest';
import {
  PATH_AUTH,
  PATH_GITHUB,
} from '@/routes';

import classes from './page.module.css';

const TECH_STACK = [
  { title: 'nextjs', version: '14.0.2', href: 'https://nextjs.org/' },
  { title: 'react', version: '18.2.0', href: 'https://react.dev/' },
  {
    title: 'typescript',
    version: '5.1.6',
    href: 'https://www.typescriptlang.org/',
  },
  { title: 'mantine', version: '7.2.2', href: 'https://mantine.dev/' },
  {
    title: 'tabler icons',
    version: '2.40.0',
    href: 'https://tabler-icons.io/',
  },
  { title: 'tiptap', version: '2.1.12', href: 'https://tiptap.dev/' },
  { title: 'apexcharts', version: '3.44.0', href: 'https://apexcharts.com/' },
  { title: 'dayjs', version: '1.11.10', href: 'https://day.js.org/' },
  { title: 'fullcalendar', version: '6.1.8', href: 'https://fullcalendar.io/' },
  {
    title: 'emotion',
    version: '11.11.1',
    href: 'https://emotion.sh/docs/introduction',
  },
  { title: 'dnd-kit', version: '6.0.8', href: 'https://dndkit.com/' },
  {
    title: 'embla-carousel',
    version: '8.0.0',
    href: 'https://www.embla-carousel.com/',
  },
  {
    title: 'mantine datatable',
    version: '7.1.7',
    href: 'https://icflorescu.github.io/mantine-datatable',
  },
  { title: 'lodash', version: '4.17.21', href: 'https://lodash.com/' },
  {
    title: 'react simple maps',
    version: '3.0.0',
    href: 'https://www.react-simple-maps.io/',
  },
];

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
                  dashboard or app.
                </Title>
                <Text>
                  Mantine admin template comes with hundreds of UI elements,
                  forms, tables, charts, pages and icons that helps you to
                  create your web apps or applications faster.
                </Text>
                <Group my="lg">
                  <Button
                    component={Link}
                    href={PATH_AUTH.signin}
                    size="md"
                    leftSection={<IconPlayerPlay size={18} />}
                  >
                    Live Preview
                  </Button>
                  <Button
                    size="md"
                    component="a"
                    href={PATH_GITHUB.repo}
                    target="_blank"
                    variant="white"
                    leftSection={<IconBrandGithub size={18} />}
                  >
                    Give us a star
                  </Button>
                </Group>
                <Stack>
                  <Text fw={700}>Tech Stack:</Text>
                  <Spoiler
                    maxHeight={48}
                    showLabel="Show more"
                    hideLabel="Hide"
                    styles={{ control: { color: 'white', margin: '4px 8px' } }}
                  >
                    <Group pb="sm">
                      {TECH_STACK.map((t) => (
                        <Tooltip
                          key={t.title}
                          label={`${t.title}-${t.version}`}
                        >
                          <UnstyledButton
                            className={classes.stackControl}
                            component="a"
                            href={t.href}
                            target="_blank"
                          >
                            {t.title}
                          </UnstyledButton>
                        </Tooltip>
                      ))}
                    </Group>
                  </Spoiler>
                </Stack>
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
