import { NavItem } from '@/types/nav-item';
import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
} from '@tabler/icons-react';

export const navLinks: NavItem[] = [
	{ icon: IconDashboard, label: 'Dashboard', link: '/dashboard' },

	{
		icon: IconComponents,
		initiallyOpened: true,
		label: 'Components',
		links: [
			{
				label: 'Table',
				link: '/dashboard/table',
			},
			{
				label: 'Form',
				link: '/dashboard/form',
			},
		],
	},
	{
		icon: IconLock,
		initiallyOpened: true,
		label: 'Auth',
		links: [
			{
				label: 'Login',
				link: '/login',
			},
			{
				label: 'Register',
				link: '/register',
			},
		],
	},
	{
		icon: IconMoodSmile,
		initiallyOpened: true,
		label: 'Sample',
		links: [
			{
				label: 'Landing',
				link: '/',
			},
		],
	},
];
