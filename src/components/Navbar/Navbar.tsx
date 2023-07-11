import {
	Group,
	Navbar as MantineNavbar,
	ScrollArea,
	createStyles,
	rem,
} from '@mantine/core';

import { UserButton } from '@/components/UserButton/UserButton';
import { NavItem } from '@/types/nav-item';
import { Logo } from '../Logo/Logo';
import { NavLinksGroup } from './NavLinksGroup';

const useStyles = createStyles((theme) => ({
	footer: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		paddingTop: theme.spacing.md,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingBottom: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
	},

	navbar: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		boxShadow: '1px 1px 3px rgba(0, 0, 0, .15)',
		paddingBottom: 0,
	},
}));

interface Props {
	data: NavItem[];
	hidden?: boolean;
}

export function Navbar({ data, hidden }: Props) {
	const { classes } = useStyles();
	const links = data.map((item) => (
		<NavLinksGroup key={item.label} {...item} />
	));

	return (
		<MantineNavbar
			className={classes.navbar}
			height="100vh"
			hidden={hidden}
			hiddenBreakpoint="sm"
			p="md"
			width={{ sm: 280 }}
			withBorder={false}
		>
			<MantineNavbar.Section>
				<Group h={rem(40)} position="apart">
					<Logo width={rem(30)} />
				</Group>
			</MantineNavbar.Section>
			<MantineNavbar.Section
				className={classes.links}
				component={ScrollArea}
				grow
			>
				<div className={classes.linksInner}>{links}</div>
			</MantineNavbar.Section>

			<MantineNavbar.Section className={classes.footer}>
				<UserButton
					email="hspoon@outlook.com"
					image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
					name="Harriette"
				/>
			</MantineNavbar.Section>
		</MantineNavbar>
	);
}
