'use client';

import {
	createStyles,
	Menu,
	Center,
	Header as MantineHeader,
	Container,
	Group,
	Button,
	Burger,
	rem,
	Title,
} from '@mantine/core';
import { Logo } from '@/components/Logo/Logo';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	inner: {
		alignItems: 'center',
		display: 'flex',
		height: HEADER_HEIGHT,
		justifyContent: 'space-between',
		padding: `0 ${theme.spacing.xl}`,
	},

	link: {
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
		borderRadius: theme.radius.sm,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		display: 'block',
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,

		textDecoration: 'none',
	},

	linkLabel: {
		marginRight: rem(5),
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},
}));

interface HeaderActionProps {
	links: {
		link: string;
		label: string;
		links?: { link: string; label: string }[];
	}[];
}

export function Header({ links }: HeaderActionProps) {
	const { classes } = useStyles();
	const [opened, { toggle }] = useDisclosure(false);
	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					transitionProps={{ exitDuration: 0 }}
					trigger="hover"
					withinPortal
				>
					<Menu.Target>
						<a
							className={classes.link}
							href={link.link}
							onClick={(event) => event.preventDefault()}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size={rem(12)} stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<a
				className={classes.link}
				href={link.link}
				key={link.label}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</a>
		);
	});

	return (
		<MantineHeader height={HEADER_HEIGHT}>
			<Container className={classes.inner} fluid>
				<Group>
					<Burger
						className={classes.burger}
						onClick={toggle}
						opened={opened}
						size="sm"
					/>
					<Logo />
				</Group>
				<Group className={classes.links} spacing={5}>
					{items}
				</Group>
				<Button h={30} radius="xl">
					Get early access
				</Button>
			</Container>
		</MantineHeader>
	);
}
