import {
	ColorScheme,
	Group,
	Radio,
	useMantineColorScheme,
} from '@mantine/core';
import { useState } from 'react';

export const ThemeSwitcher = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [themeValue, setThemeValue] = useState(colorScheme);

	return (
		<Radio.Group
			label="Theme Mode"
			name="theme"
			onChange={(value: ColorScheme) => {
				setThemeValue(value);
				toggleColorScheme(value);
			}}
			value={themeValue}
		>
			<Group mt="sm">
				<Radio label="Light" value="light" />
				<Radio label="Dark" value="dark" />
			</Group>
		</Radio.Group>
	);
};
