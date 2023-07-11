'use client';

import {
	Container,
	Paper,
	SimpleGrid,
	Space,
	Text,
	ThemeIcon,
	Title,
	createStyles,
	rem,
} from '@mantine/core';
import {
	IconBrandMantine,
	IconBrandNextjs,
	IconBrandOauth,
	IconBrandPlanetscale,
	IconBrandReact,
} from '@tabler/icons-react';

export const featuresData = [
	{
		description: 'App dir, Routing, Layouts, Loading UI and API routes.',
		icon: IconBrandNextjs,
		title: 'Next.js',
	},
	{
		description: 'Server and Client Components. Use hook.',
		icon: IconBrandReact,
		title: 'React 18',
	},
	{
		description: 'ORM using Prisma and deployed on PlanetScale.',
		icon: IconBrandPlanetscale,
		title: 'Database',
	},
	{
		description: 'UI components built using Mantine UI.',
		icon: IconBrandMantine,
		title: 'Components',
	},
	{
		description: 'Authentication using NextAuth.js and middlewares.',
		icon: IconBrandOauth,
		title: 'Authentication',
	},
];

interface FeatureProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
	return (
		<Paper px="lg" py="sm" radius="md" shadow="md" withBorder>
			<ThemeIcon radius={60} size={60} variant="light">
				<Icon size="2rem" stroke={1.5} />
			</ThemeIcon>
			<Text fw="600" mb={7} mt="sm">
				{title}
			</Text>
			<Text color="dimmed" size="sm" sx={{ lineHeight: 1.6 }}>
				{description}
			</Text>
		</Paper>
	);
}

const useStyles = createStyles((theme) => ({
	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left',
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

	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
	},
}));

interface FeaturesGridProps {
	title: React.ReactNode;
	description: React.ReactNode;
	data?: FeatureProps[];
}

export function FeaturesSection({
	title,
	description,
	data = featuresData,
}: FeaturesGridProps) {
	const { classes } = useStyles();
	const features = data.map((feature, index) => (
		<Feature {...feature} key={index} />
	));

	return (
		<Container className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>
			<Space h="md" />

			<Container p={0} size={560}>
				<Text className={classes.description} size="sm">
					{description}
				</Text>
			</Container>

			<SimpleGrid
				breakpoints={[
					{ cols: 2, maxWidth: 'md', spacing: 'xl' },
					{ cols: 1, maxWidth: 'sm', spacing: 'xl' },
				]}
				cols={3}
				mt={60}
				spacing="xl"
			>
				{features}
			</SimpleGrid>
		</Container>
	);
}
