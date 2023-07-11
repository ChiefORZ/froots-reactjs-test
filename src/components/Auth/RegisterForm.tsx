'use client';

import { Paper, TextInput, PasswordInput, Space, Button } from '@mantine/core';

export function RegisterForm() {
	return (
		<Paper mt={30} p={30} radius="md" shadow="md" withBorder>
			<TextInput label="Email" placeholder="test@example.com" required />
			<PasswordInput
				label="Password"
				mt="md"
				placeholder="Your password"
				required
			/>
			<Space h="md" />
			<Button fullWidth mt="xl">
				Sign Up
			</Button>
		</Paper>
	);
}
