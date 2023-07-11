'use client';

import { Anchor, Center, Container, Text, Title } from '@mantine/core';

interface Props {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
	return (
		<Center
			sx={(theme) => ({
				backgroundImage:
					theme.colorScheme === 'light'
						? 'linear-gradient(to top, #dfe9f3 0%, white 100%)'
						: 'linear-gradient(to top, #1a202c 0%, #2d3748 100%)',
				color: theme.colorScheme === 'light' ? theme.colors.dark : theme.white,
				minHeight: '100vh',
			})}
		>
			<Container size="xs" sx={{ paddingBottom: 16, width: 480 }}>
				<Title
					align="center"
					sx={(theme) => ({
						fontFamily: `Greycliff CF, ${theme.fontFamily}`,
						fontWeight: 900,
					})}
				>
					Mantine Admin
				</Title>
				<Text align="center" color="dimmed" mt={5} size="sm">
					Don&apos;t have an account?{' '}
					<Anchor href="/register" size="sm">
						Sign Up
					</Anchor>
				</Text>
				{children}
			</Container>
		</Center>
	);
}
