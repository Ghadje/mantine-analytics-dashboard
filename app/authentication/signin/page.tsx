'use client';

import {
  Button,
  // Center,
  // Checkbox,
  // Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  // TextProps,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Surface } from '@/components';
import { 
  // PATH_AUTH, 
  PATH_DASHBOARD,
} from '@/routes';

import classes from './page.module.css';


// const LINK_PROPS: TextProps = {
//   className: classes.link,
// };

function Page() {
  const { replace } = useRouter();
  const form = useForm({
    initialValues: { email: 'demo@iris.dz', password: 'Iris@123' },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
      password: (value) =>
        value && value?.length < 6
          ? 'Le mot de passe doit contenir au moins 6 caractères'
          : null,
    },
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (result?.ok) {
      replace(PATH_DASHBOARD.default);
    } else {
      console.error('Login failed:', result?.error);
    }
  };


  return (
    <>
      <>
        <title>Se connecter | Iris</title>
        <meta
          name="description"
          content="Se connecter au dashboard de iris sat"
        />
      </>
      <Title ta="center">Bienvenue à nouveau!</Title>
      <Text ta="center">Connectez-vous à votre compte pour continuer</Text>

      <Surface component={Paper} className={classes.card}>
        <form
          onSubmit={form.onSubmit(handleLogin)}
        >
          <TextInput
            label="Email"
            placeholder="email@iris.dz"
            required
            classNames={{ label: classes.label }}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Mot de passe"
            placeholder="Entrer votre mot de passe"
            required
            mt="md"
            classNames={{ label: classes.label }}
            {...form.getInputProps('password')}
          />
          {/* uncomment-this if you want to integrate change password */}
          {/* <Group justify="space-between" mt="lg">
            <Checkbox
              label="Remember me"
              classNames={{ label: classes.label }}
            />
            <Text
              component={Link}
              href={PATH_AUTH.passwordReset}
              size="sm"
              {...LINK_PROPS}
            >
              Forgot password?
            </Text>
          </Group> */}
          <Button
            color="ocean-orange"
            fullWidth mt="xl" 
            type="submit"
            >
            Se connecter
          </Button>
        </form>
        {/* uncomment-this if you want to integrate signup */}
        {/* <Center mt="md">
          <Text
            fz="sm"
            ta="center"
            component={Link}
            href={PATH_AUTH.signup}
            {...LINK_PROPS}
          >
            Do not have an account yet? Create account
          </Text>
        </Center> */}
      </Surface>
    </>
  );
}

export default Page;
