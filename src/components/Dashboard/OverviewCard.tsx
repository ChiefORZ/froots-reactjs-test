import { Card, Title } from '@mantine/core';
import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title as ChartTitle,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
);

export const options = {
	plugins: {
		legend: {
			position: 'top' as const,
		},
	},
	responsive: true,
	smooth: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	datasets: [
		{
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			borderColor: 'rgb(255, 99, 132)',
			data: labels.map(() => Math.random() * 1000),
			label: 'Dataset 1',
		},
		{
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
			borderColor: 'rgb(53, 162, 235)',
			data: labels.map(() => Math.random() * 1000),
			label: 'Dataset 2',
		},
	],
	labels,
};

export function OverviewCard() {
	return (
		<Card h="100%" radius="md" w="100%">
			<Title order={5}>Overview</Title>
			<Line data={data} options={options} />
		</Card>
	);
}
