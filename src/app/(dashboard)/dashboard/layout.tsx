'use client';

import { AdminHeader } from '@/components/Headers/AdminHeader';
import { Navbar } from '@/components/Navbar/Navbar';
import { navLinks } from '@/config';
import {
	AppShell,
	Burger,
	Container,
	Footer,
	MediaQuery,
	Text,
} from '@mantine/core';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			footer={
				<Footer height={50} p="md">
					<Text align="center" color="gray" size="sm" w="full">
						CopyRight © 2023 Jotyy
					</Text>
				</Footer>
			}
			header={
				<AdminHeader
					burger={
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								mr="xl"
								onClick={() => setOpened((o) => !o)}
								opened={opened}
								size="sm"
							/>
						</MediaQuery>
					}
				/>
			}
			layout="alt"
			navbar={<Navbar data={navLinks} hidden={!opened} />}
			navbarOffsetBreakpoint="sm"
			sx={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[7]
							: theme.colors.gray[1],
				},
			})}
		>
			<Container fluid>{children}</Container>
		</AppShell>
	);
}
