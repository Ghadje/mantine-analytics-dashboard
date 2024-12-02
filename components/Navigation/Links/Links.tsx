import { useEffect, useState } from 'react';

import { Box, Collapse, Group, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import * as _ from 'lodash';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import classes from './Links.module.css';

interface LinksGroupProps {
  icon?: any;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: {
    label: string;
    link: string;
  }[];
  closeSidebar: () => void;
}

export function LinksGroup(props: LinksGroupProps) {
  const {
    icon: Icon,
    label,
    initiallyOpened,
    link,
    links,
    closeSidebar,
  } = props;

  const router = useRouter();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();
  
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPath, setCurrentPath] = useState<string | undefined>();
  const ChevronIcon = IconChevronRight;
  
  const handleNavigation = async (targetLink: string) => {
    if (status === 'unauthenticated') {
      // Redirect to login if session is invalid
      router.push('/authentication/signin');
    } else {
      // Proceed with navigation
      router.push(targetLink);
      closeSidebar();
    }
  };

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component="button"
      className={classes.link}
      onClick={() => handleNavigation(link.link)}
      key={link.label}
      data-active={link.link.toLowerCase() === pathname || undefined}
    >
      {link.label}
    </Text>
  ));

  useEffect(() => {
    const paths = pathname.split('/');
    setOpened(paths.includes(label.toLowerCase()));
    setCurrentPath(_.last(paths)?.toLowerCase() || undefined);
  }, [pathname, label]);

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (link) {
            handleNavigation(link); // Validate session before navigating to parent link
          } else {
            setOpened((o) => !o);
          }
        }}
        className={classes.control}
        data-active={opened || undefined}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Icon size={18} />
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? `rotate(90deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
