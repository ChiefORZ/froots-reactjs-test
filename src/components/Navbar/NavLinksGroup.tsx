'use client';

import {
	Box,
	Collapse,
	Group,
	ThemeIcon,
	UnstyledButton,
	createStyles,
	rem,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
	activeControl: {
		color: theme.colors.indigo,
	},

	activeLink: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[7]
				: theme.colors.gray[0],
		color: theme.colors.indigo,
	},

	chevron: {
		transition: 'transform 200ms ease',
	},

	control: {
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		display: 'block',
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		textDecoration: 'none',

		width: '100%',
	},

	link: {
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
		borderLeft: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		display: 'block',
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		marginLeft: rem(30),
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		paddingLeft: rem(31),

		textDecoration: 'none',
	},
}));

interface LinksGroupProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: React.FC<any>;
	label: string;
	link?: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}

export function NavLinksGroup({
	icon: Icon,
	label,
	link,
	initiallyOpened,
	links,
}: LinksGroupProps) {
	const { classes, theme } = useStyles();
	const pathname = usePathname();

	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
	const items = (hasLinks ? links : []).map((linkk) => {
		return (
			<Link
				className={`${classes.link} ${
					linkk.link === pathname && classes.activeLink
				}`}
				href={linkk.link}
				key={linkk.label}
			>
				{linkk.label}
			</Link>
		);
	});

	return (
		<>
			{link ? (
				<Link
					className={`${classes.control} ${
						link === pathname && classes.activeControl
					}`}
					href={link}
				>
					<Group position="apart" spacing={0}>
						<Box sx={{ alignItems: 'center', display: 'flex' }}>
							<ThemeIcon size={30} variant="light">
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
					</Group>
				</Link>
			) : (
				<UnstyledButton
					className={classes.control}
					onClick={() => {
						if (hasLinks) {
							setOpened((o) => !o);
							return;
						}
					}}
				>
					<Group position="apart" spacing={0}>
						<Box sx={{ alignItems: 'center', display: 'flex' }}>
							<ThemeIcon size={30} variant="light">
								<Icon size="1.1rem" />
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
						{hasLinks && (
							<ChevronIcon
								className={classes.chevron}
								size="1rem"
								stroke={1.5}
								style={{
									transform: opened
										? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
										: 'none',
								}}
							/>
						)}
					</Group>
				</UnstyledButton>
			)}
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
}
