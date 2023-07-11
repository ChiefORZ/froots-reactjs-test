import { Card, Title, Space, List, ThemeIcon, Text } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function WelcomeCard() {
	return (
		<Card radius="md">
			<Title c="indigo" order={5}>
				Welcome back!
			</Title>
			<Text c="dimmed" fw="500" fz="sm">
				Mantine Crypto Dashboard
			</Text>
			<Space h="sm" />
			<List
				center
				icon={
					<ThemeIcon color="teal" radius="xl" size={22}>
						<IconCircleCheck size="1rem" />
					</ThemeIcon>
				}
				size="sm"
				spacing="sm"
			>
				<List.Item>If several languages coalesce</List.Item>
				<List.Item>Sed ut perspiciatis unde</List.Item>
				<List.Item>It would be necessary</List.Item>
			</List>
		</Card>
	);
}
