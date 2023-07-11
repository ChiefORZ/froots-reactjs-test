'use client';

import {
	Paper,
	TextInput,
	PasswordInput,
	Group,
	Checkbox,
	Anchor,
	Button,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

export function LoginForm() {
	const router = useRouter();

	return (
		<Paper mt={30} p={30} radius="md" shadow="md" withBorder>
			<TextInput label="Email" placeholder="test@example.com" required />
			<PasswordInput
				label="Password"
				mt="md"
				placeholder="Your password"
				required
			/>
			<Group mt="md" position="apart">
				<Checkbox label="Remember me" />
				<Anchor href="#" size="sm">
					Forgot Password？
				</Anchor>
			</Group>
			<Button fullWidth mt="xl" onClick={() => router.push('/dashboard')}>
				Sign In
			</Button>
		</Paper>
	);
}
