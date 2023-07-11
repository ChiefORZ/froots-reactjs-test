'use client';

import {
	Button,
	Card,
	Group,
	Select,
	Space,
	Stack,
	Text,
	Title,
	createStyles,
	rem,
} from '@mantine/core';
import { IconArrowRight, IconArrowUp } from '@tabler/icons-react';
import { BalanceChart } from './BalanceChart';

const useStyle = createStyles((theme) => ({
	section: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		display: 'flex',

		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: theme.spacing.lg,
	},
}));

const BalanceLeftStack = () => (
	<Stack spacing="lg" style={{ flex: 1 }}>
		<Stack spacing={4}>
			<Text c="gray.6" size="xs">
				Availabel Balance
			</Text>
			<Space h={4} />
			<Title order={2}>$ 9572.23</Title>
			<Text c="gray.5" size="sm">
				+ 0.0012.23(0.2%)
				<span>
					<IconArrowUp color="green" size={12} />
				</span>
			</Text>
		</Stack>

		<Group>
			<Stack spacing={4}>
				<Text c="gray.6" size="sm">
					Income
				</Text>
				<Title order={4}>$ 5729.28</Title>
			</Stack>
			<Stack spacing={4}>
				<Text c="gray.6" size="sm">
					Expense
				</Text>
				<Title order={4}>$ 1329.89</Title>
			</Stack>
		</Group>
		<Button rightIcon={<IconArrowRight size={14} />} size="sm" w={rem(140)}>
			View more
		</Button>
	</Stack>
);

const BalanceRightStack = () => (
	<Stack style={{ flex: 1 }}>
		<Stack align="start">
			<Text c="gray.6" size="sm">
				Etherum
			</Text>
			<Title order={4}>
				1.5236 ETH ={' '}
				<Text c="gray.6" component="span" fw="bold" size="md">
					$1123.64
				</Text>
			</Title>
		</Stack>
		<Stack align="start">
			<Text c="gray.6" size="sm">
				Bitcoin
			</Text>
			<Title order={4}>
				0.0236 BTC ={' '}
				<Text c="gray.6" component="span" fw="bold" size="md">
					$923.64
				</Text>
			</Title>
		</Stack>
		<Stack align="start">
			<Text c="gray.6" size="sm">
				Doge
			</Text>
			<Title order={4}>
				2210 DOGE ={' '}
				<Text c="gray.6" component="span" fw="bold" size="md">
					$112.64
				</Text>
			</Title>
		</Stack>
	</Stack>
);

export function BalanceCard() {
	const { classes } = useStyle();

	return (
		<Card radius="md">
			<Card.Section className={classes.section}>
				<Title order={5}>Wallet Balance</Title>
				<Select
					data={[
						{ label: 'March', value: 'march' },
						{ label: 'April', value: 'april' },
					]}
					size="sm"
					value="march"
					withinPortal
				/>
			</Card.Section>
			<Card.Section className={classes.section}>
				<BalanceLeftStack />
				{/* <BalanceChart /> */}
				<BalanceRightStack />
			</Card.Section>
		</Card>
	);
}
