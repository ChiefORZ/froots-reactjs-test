'use client';

import {
	createStyles,
	Header as MantineHeader,
	Container,
	Group,
	Button,
	rem,
} from '@mantine/core';
import { Logo } from '@/components/Logo/Logo';
import Link from 'next/link';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
	inner: {
		alignItems: 'center',
		display: 'flex',
		height: HEADER_HEIGHT,
		justifyContent: 'space-between',
		padding: `0 ${theme.spacing.xl}`,
	},
}));

export function Header() {
	const { classes } = useStyles();

	return (
		<MantineHeader height={HEADER_HEIGHT}>
			<Container className={classes.inner} fluid>
				<Group>
					<Link href="/" style={{ textDecoration: 'none' }}>
						<Logo />
					</Link>
				</Group>
			</Container>
		</MantineHeader>
	);
}
