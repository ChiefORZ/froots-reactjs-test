import { AppProvider } from './provider';

export const metadata = {
	authors: [
		{
			name: 'jotyy',
			url: 'https://jotyy.vercel.app',
		},
	],
	creator: 'jotyy',
	description: 'A Modern Admin template build with Next.js 13/MantineUI',
	keywords: [
		'Next.js',
		'Mantine',
		'Admin',
		'Template',
		'Admin Template',
		'Admin Dashboard',
		'Admin Panel',
		'Admin UI',
	],
	manifest: 'https://mantine-admin.vercel.app/site.webmanifest',
	metadataBase: new URL('https://mantine-admin.vercel.app/'),
	openGraph: {
		description: 'A Modern Admin template build with Next.js 13/MantineUI',
		images: '/static/images/banner.png',
		locale: 'en_US',
		siteName: 'Mantine Admin',
		site_name: 'Mantine Admin',
		type: 'website',
		url: 'https://mantine-admin.vercel.app',
	},
	title: { default: 'Mantine Admin', template: '%s | Mantine Admin' },
	twitter: {
		card: 'summary_large_image',
		creator: '@jotyy3',
		description: 'A Modern Admin template build with Next.js 13/MantineUI',
		images: ['https://mantine-admin.vercel.app/static/images/banner.png'],
		title: 'Mantine Admin',
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
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
