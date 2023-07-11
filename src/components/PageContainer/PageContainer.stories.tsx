import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer } from './PageContainer';

const meta: Meta<typeof PageContainer> = {
	component: PageContainer,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: 'fullscreen',
	},

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ['autodocs'],

	title: 'Components/PageContainer',
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
	render: () => <PageContainer title="Dashboard">Content</PageContainer>,
};

export const Fluid: Story = {
	render: () => (
		<PageContainer fluid title="Dashboard">
			Content
		</PageContainer>
	),
};
