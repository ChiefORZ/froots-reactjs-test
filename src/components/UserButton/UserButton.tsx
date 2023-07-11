import {
	UnstyledButton,
	UnstyledButtonProps,
	Group,
	Avatar,
	Text,
	createStyles,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
	user: {
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[8]
					: theme.colors.gray[0],
		},
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		display: 'block',
		padding: theme.spacing.md,

		width: '100%',
	},
}));

interface UserButtonProps extends UnstyledButtonProps {
	image: string;
	name: string;
	email: string;
	icon?: React.ReactNode;
}

export function UserButton({
	image,
	name,
	email,
	icon,
	...others
}: UserButtonProps) {
	const { classes } = useStyles();

	return (
		<UnstyledButton className={classes.user} {...others}>
			<Group>
				<Avatar radius="xl" src={image} />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{name}
					</Text>

					<Text color="dimmed" size="xs">
						{email}
					</Text>
				</div>

				{icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
			</Group>
		</UnstyledButton>
	);
}
