import { AppProvider } from '@/app/provider';
import RootLayoutClient from '@/app/layout.client';

export const metadata = {
	description: 'Froots React.js Assignment',
	icons: {
		icon: '/favicon.png',
	},
	keywords: ['froots', 'react', 'typescript', 'nextjs'],
	title: {
		default: 'Froots React.js Assignment',
		template: '%s | Froots React.js Assignment',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en-US">
			<head />
			<body>
				<AppProvider>
					<RootLayoutClient>{children}</RootLayoutClient>
				</AppProvider>
			</body>
		</html>
	);
}
