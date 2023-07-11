import { Flex, Text, useMantineTheme } from '@mantine/core';
import Image from 'next/image';

export const Logo: React.FC = () => {
	const theme = useMantineTheme();
	return (
		<Flex align="center" direction="row" gap={4}>
			<Image alt="froots" height={34} src="/froots-logo.webp" width={100} />
			<Text
				color={theme.colorScheme === 'light' ? 'dark' : 'white'}
				fw="normal"
				ml={8}
				size="xl"
			>
				React.js Test
			</Text>
		</Flex>
	);
};
