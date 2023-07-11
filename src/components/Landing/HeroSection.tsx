'use client';

import {
	Button,
	Container,
	Group,
	Text,
	Title,
	createStyles,
	rem,
} from '@mantine/core';
import { IconArrowRight, IconStar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
	control: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(18),
		paddingLeft: rem(40),
		paddingRight: rem(40),

		[theme.fn.smallerThan('md')]: {
			width: '100%',
		},
	},

	description: {
		maxWidth: rem(500),
		opacity: 0.75,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
		},
	},

	inner: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		textAlign: 'center',

		[theme.fn.smallerThan('md')]: {
			marginRight: 0,
		},
	},

	subtitle: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(40),
		fontWeight: 800,
		lineHeight: 1.05,
		paddingTop: theme.spacing.xl,

		[theme.fn.smallerThan('md')]: {
			fontSize: rem(26),
			lineHeight: 1.15,
			maxWidth: '100%',
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(64),
		fontWeight: 900,
		lineHeight: 1.05,

		[theme.fn.smallerThan('md')]: {
			fontSize: rem(34),
			lineHeight: 1.15,
			maxWidth: '100%',
		},
	},
}));

export function HeroSection() {
	const { classes } = useStyles();
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Title
					className={classes.title}
					gradient={{ from: 'indigo', to: 'cyan' }}
					variant="gradient"
				>
					MantineAdmin
				</Title>
				<Title className={classes.subtitle}>
					A Next.js 13 Admin template build with Mantine UI
				</Title>

				<Text className={classes.description} mt={30}>
					Build fully functional dashboard web applications with ease –
					Mantine-Admin includes all components and hooks to cover you in any
					situation
				</Text>

				<Group mt={40}>
					<Button
						className={classes.control}
						gradient={{ from: 'indigo', to: 'cyan' }}
						onClick={() => {
							router.push('/dashboard');
						}}
						rightIcon={<IconArrowRight />}
						size="lg"
						variant="gradient"
					>
						Get started
					</Button>
					<Button
						className={classes.control}
						onClick={() => {
							// open github
							window.open('https://github.com/jotyy/mantine-admin');
						}}
						rightIcon={<IconStar />}
						size="lg"
						variant="outline"
					>
						Give a Star
					</Button>
				</Group>
			</div>
		</Container>
	);
}
