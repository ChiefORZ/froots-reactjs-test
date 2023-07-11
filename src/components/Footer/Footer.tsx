'use client';

import {
	ActionIcon,
	Anchor,
	Container,
	Group,
	Text,
	createStyles,
	rem,
} from '@mantine/core';
import {
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
	footer: {
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
		marginTop: rem(120),
	},

	inner: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: theme.spacing.xl,
		paddingTop: theme.spacing.xl,

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},
	},
}));

export function Footer() {
	const { classes } = useStyles();

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Text color="dimmed" fz="sm">
					Build by <Anchor href="https://github.com/jotyy">jotyy</Anchor>.
					Hosted on <Anchor href="https://vercel.com">Vercel</Anchor>.
				</Text>
				<Group className={classes.links} noWrap position="right" spacing={0}>
					<ActionIcon size="lg">
						<IconBrandTwitter size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandYoutube size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandInstagram size="1.05rem" stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
}
