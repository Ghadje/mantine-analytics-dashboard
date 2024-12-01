import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconBrandGithub, IconPlayerPlay } from '@tabler/icons-react';
import Link from 'next/link';

import { Logo } from '@/components';
import { PATH_AUTH, PATH_DASHBOARD, PATH_DOCS, PATH_GITHUB } from '@/routes';

import classes from './HeaderNav.module.css';


const MOCK_DATA = [
  {
    link: 'https://iris.dz/',
    label: 'Welcome',
  },
  {
    link: 'https://iris.dz/about_EN',
    label: 'À propos',
  },
  {
    link: 'https://iris.dz/contact',
    label: 'Contact',
  },
];

const HeaderNav = () => {
  const theme = useMantineTheme();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const tablet_match = useMediaQuery('(max-width: 768px)');

  const items = MOCK_DATA.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Box>
      <header className={classes.header}>
        <Container className={classes.inner} fluid>
          <Logo style={{ color: theme.white }} />
          <Group gap="xs" className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color={theme.white}
          />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        transitionProps={{
          transition: tablet_match ? 'slide-up' : 'slide-left',
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          {items}
          <Button
            component="a"
            target="_blank"
            href={PATH_GITHUB.repo}
            variant="transparent"
            c="white"
            leftSection={<IconBrandGithub size={16} />}
            className={classes.link}
          >
            Give us a star
          </Button>
          <Button component={Link} href={PATH_DASHBOARD.default}>
            Live Previews
          </Button>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default HeaderNav;
