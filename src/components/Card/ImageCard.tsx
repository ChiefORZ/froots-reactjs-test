'use client';

import {
	Card,
	Text,
	Group,
	createStyles,
	getStylesRef,
	rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	author: {
		color: theme.colors.dark[2],
	},
	bodyText: {
		color: theme.colors.dark[2],
		marginLeft: rem(7),
	},
	card: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		height: rem(280),
		position: 'relative',

		[`&:hover .${getStylesRef('image')}`]: {
			transform: 'scale(1.03)',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'flex-end',
		position: 'relative',
		zIndex: 1,
	},
	image: {
		...theme.fn.cover(),
		backgroundSize: 'cover',
		ref: getStylesRef('image'),
		transition: 'transform 500ms ease',
	},
	overlay: {
		backgroundImage:
			'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
		bottom: 0,
		left: 0,
		position: 'absolute',
		right: 0,
		top: '20%',
	},
	title: {
		color: theme.white,
		marginBottom: rem(5),
	},
}));

interface ImageCardProps {
	id: number;
	image: string;
	title: string;
	author: string;
	onClick: (imageId: number) => void;
}

export function ImageCard({
	id,
	image,
	title,
	author,
	onClick,
}: ImageCardProps) {
	const { classes, theme } = useStyles();

	return (
		<Card
			className={classes.card}
			onClick={(evt) => onClick(id)}
			p="lg"
			radius="md"
			shadow="lg"
		>
			<div
				className={classes.image}
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<div>
					<Text className={classes.title} size="lg" weight={500}>
						{title}
					</Text>

					<Group position="apart" spacing="xs">
						<Text className={classes.author} size="sm">
							{author}
						</Text>
					</Group>
				</div>
			</div>
		</Card>
	);
}
