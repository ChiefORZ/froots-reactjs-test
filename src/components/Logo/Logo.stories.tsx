import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { rem } from '@mantine/core';

const meta: Meta<typeof Logo> = {
	component: Logo,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'centered',
	},

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],

	title: 'Components/Logo',
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
	render: () => <Logo width={rem(50)} />,
};
