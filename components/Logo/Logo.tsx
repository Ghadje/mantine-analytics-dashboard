import {
  Group,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  return (
    <UnstyledButton
      component={Link}
      href={href || '/'}
      {...others}
    >
      <Group gap="xs">
      <Image
        src="/iris-logo-white.svg"
        width={100}
        height={100}
        className="hidden md:block"
        alt="Iris logo"
      />
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
