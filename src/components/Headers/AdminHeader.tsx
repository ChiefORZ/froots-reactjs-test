import {
	ActionIcon,
	Avatar,
	Box,
	Drawer,
	Header,
	Menu,
	Space,
	Stack,
	Text,
	TextInput,
	createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconArrowsLeftRight,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
	IconTrash,
} from '@tabler/icons-react';
import { useState } from 'react';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { DirectionSwitcher } from '../DirectionSwitcher/DirectionSwitcher';

interface Props {
	burger?: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
	header: {
		alignItems: 'center',
		boxShadow: '1px 1px 3px rgba(0, 0, 0, .25)',
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: theme.spacing.md,
	},
}));

export function AdminHeader({ burger }: Props) {
	const { classes } = useStyles();
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<Header className={classes.header} height={60} withBorder={false}>
			{burger && burger}
			<TextInput
				icon={<IconSearch size="0.8rem" />}
				placeholder="Search"
				variant="filled"
			/>
			<Box sx={{ flex: 1 }} />
			<ActionIcon onClick={open}>
				<IconSettings size="1.25rem" />
			</ActionIcon>

			<Drawer onClose={close} opened={opened} position="right" title="Settings">
				<Stack spacing="lg">
					<ThemeSwitcher />
					<DirectionSwitcher />
				</Stack>
			</Drawer>
		</Header>
	);
}
