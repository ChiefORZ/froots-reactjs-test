'use client';
import { Header } from '@/components/Headers/Header';
import { AppShell } from '@mantine/core';

export default function RootLayoutClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppShell
			header={<Header />}
			sx={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[7]
							: theme.colors.gray[1],
				},
			})}
		>
			{children}
		</AppShell>
	);
}
