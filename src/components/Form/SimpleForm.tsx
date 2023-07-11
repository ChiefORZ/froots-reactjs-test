'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Paper, Space, Text, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email('Email is not valid'),
	name: z.string().min(1, { message: 'Username is required' }),
});

type User = z.infer<typeof schema>;

export const SimpleForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: User) =>
		modals.openConfirmModal({
			children: <Text size="sm">{data.name}</Text>,
			labels: { cancel: 'Cancel', confirm: 'Confirm' },
			onConfirm: () => console.log('Confirmed'),
			title: 'Register successfully',
		});

	return (
		<Paper p="md" shadow="md" w="400px" withBorder>
			<Box<'form'>>
				<Text<'h2'> component="h2" fw="bold" fz="lg">
					Register
				</Text>
				<TextInput
					error={errors.name && errors.name.message}
					label="Username"
					{...register('name')}
				/>
				<Space h="sm" />
				<TextInput
					error={errors.email && errors.email.message}
					label="Email"
					{...register('email')}
				/>
				<Text color="gray" component="p" size="sm">
					We will send you a confirmation email
				</Text>
				<Space h="md" />
				<Button onClick={handleSubmit(onSubmit)}>Register</Button>
			</Box>
		</Paper>
	);
};
