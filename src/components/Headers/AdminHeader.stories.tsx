import type { Meta, StoryObj } from '@storybook/react';
import { AdminHeader } from './AdminHeader';

const meta: Meta<typeof AdminHeader> = {
	component: AdminHeader,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],

	title: 'Components/AdminHeader',
};

export default meta;
type Story = StoryObj<typeof AdminHeader>;

export const Default: Story = {
	render: () => <AdminHeader />,
};
