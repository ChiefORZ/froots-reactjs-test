import { Flex, Text, useMantineTheme } from '@mantine/core';
interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = ({ width, height }) => {
	const theme = useMantineTheme();
	return (
		<Flex align="center" direction="row" gap={4}>
			<Text
				color={theme.colorScheme === 'light' ? 'dark' : 'white'}
				fw="bolder"
				size="xl"
			>
				Mantine
				<Text c="indigo" component="span" fw="normal">
					Admin
				</Text>
			</Text>
		</Flex>
	);
};
