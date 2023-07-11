'use client';

import {
	Button,
	Image,
	Text,
	TextInput,
	Title,
	createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	body: {
		maxWidth: '50%',
		paddingRight: `calc(${theme.spacing.xl} * 4)`,

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xl,
			paddingRight: 0,
		},
	},

	control: {
		borderBottomLeftRadius: 0,
		borderTopLeftRadius: 0,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	image: {
		maxWidth: '30%',

		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
		},
	},

	input: {
		borderBottomRightRadius: 0,
		borderRight: 0,
		borderTopRightRadius: 0,
	},

	inputWrapper: {
		flex: '1',
		width: '100%',
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	wrapper: {
		display: 'flex',
		margin: 'auto',
		alignItems: 'center',
		maxWidth: 1200,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		marginTop: `calc(${theme.spacing.xl} * 4)`,
		justifyContent: 'space-around',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
		},
	},
}));

export function EmailSection() {
	const { classes } = useStyles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<Title className={classes.title}>Wait a minute...</Title>
				<Text fw={500} fz="lg" mb={5}>
					Subscribe to our newsletter!
				</Text>
				<Text c="dimmed" fz="sm">
					You will never miss important product updates, latest news and
					community QA sessions. Our newsletter is once a week, every Sunday.
				</Text>

				<div className={classes.controls}>
					<TextInput
						classNames={{ input: classes.input, root: classes.inputWrapper }}
						placeholder="Your email"
					/>
					<Button className={classes.control}>Subscribe</Button>
				</div>
			</div>
			<Image
				alt="email"
				className={classes.image}
				src="/static/images/img-email.svg"
			/>
		</div>
	);
}
