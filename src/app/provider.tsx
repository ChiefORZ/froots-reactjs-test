'use client';

import { theme } from '@/styles/theme';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useConfigStore } from '@/stores/config';
import RootStyleRegistry from './emotion';

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
	const { colorScheme, setColorScheme } = useConfigStore();

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<QueryClientProvider client={queryClient}>
			<RootStyleRegistry>
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						theme={{ ...theme, colorScheme }}
						withGlobalStyles
						withNormalizeCSS
					>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</ColorSchemeProvider>
			</RootStyleRegistry>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
