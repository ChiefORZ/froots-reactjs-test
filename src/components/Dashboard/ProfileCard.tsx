'use client';

import {
	ActionIcon,
	Avatar,
	Button,
	Card,
	Flex,
	Group,
	Menu,
	Space,
	Stack,
	Text,
	Title,
	createStyles,
	rem,
} from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const useStyle = createStyles((theme) => ({
	section: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		padding: theme.spacing.md,
	},
}));

export function ProfileCard() {
	const { classes } = useStyle();

	return (
		<Card radius="md">
			<Card.Section className={classes.section}>
				<Group position="apart">
					<Avatar radius="xl"></Avatar>
					<Menu position="bottom-end" shadow="sm" withinPortal>
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconFileZip size={rem(14)} />}>
								Action One
							</Menu.Item>
							<Menu.Item icon={<IconEye size={rem(14)} />}>
								Action Two
							</Menu.Item>
							<Menu.Item color="red" icon={<IconTrash size={rem(14)} />}>
								Action Three
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Space h="md" />

				<Flex direction="column">
					<Title order={5}>Joshua Lee</Title>
					<Space h="xs" />
					<Text c="dimmed" fw="500" fz="sm">
						jotyy318@email.com
					</Text>
					<Space h="4" />
					<Text c="dimmed" fw="500" fz="sm">
						{'0x3D2f3bA6737C6999850E0c0Fe571190E6d27C40C'.slice(0, 12) +
							'..' +
							'0x3D2f3bA6737C6999850E0c0Fe571190E6d27C40C'.slice(-4)}
					</Text>
				</Flex>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group grow position="apart">
					<Stack spacing={4}>
						<Text fw="500" fz="sm">
							Balance
						</Text>
						<Title order={3}>$9821</Title>
					</Stack>
					<Stack spacing={4}>
						<Text fw="500" fz="sm">
							Chain
						</Text>
						<Title order={3}>Etherum</Title>
					</Stack>
				</Group>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group position="center">
					<Button variant="light">Deposit</Button>
					<Button>Buy/Sell</Button>
				</Group>
			</Card.Section>
		</Card>
	);
}
