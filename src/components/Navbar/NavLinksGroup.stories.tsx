import { navLinks } from '@/config';
import type { Meta, StoryObj } from '@storybook/react';
import { NavLinksGroup } from './NavLinksGroup';
import { IconCalendarStats } from '@tabler/icons-react';

const meta: Meta<typeof NavLinksGroup> = {
	component: NavLinksGroup,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],

	title: 'Components/NavLinksGroup',
};

export default meta;
type Story = StoryObj<typeof NavLinksGroup>;

const hasLinks = {
	icon: IconCalendarStats,
	label: 'Releases',
	links: [
		{ label: 'Upcoming releases', link: '/' },
		{ label: 'Previous releases', link: '/' },
		{ label: 'Releases schedule', link: '/' },
	],
};

export const HasLinks: Story = {
	render: () => <NavLinksGroup {...hasLinks} />,
};

const noLinks = {
	icon: IconCalendarStats,
	label: 'Releases',
	link: '/',
};

export const NoLinks: Story = {
	render: () => <NavLinksGroup {...noLinks} />,
};
