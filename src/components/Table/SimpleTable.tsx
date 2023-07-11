'use client';

import { Paper, Space, Stack, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';

type Person = {
	name: {
		firstName: string;
		lastName: string;
	};
	address: string;
	city: string;
	state: string;
};

// nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
	{
		address: '261 Battle Ford',
		city: 'Columbus',
		name: {
			firstName: 'Zachary',
			lastName: 'Davis',
		},
		state: 'Ohio',
	},
	{
		address: '566 Brakus Inlet',
		city: 'Westerville',
		name: {
			firstName: 'Robert',
			lastName: 'Smith',
		},
		state: 'West Virginia',
	},
	{
		address: '7777 Kuhic Knoll',
		city: 'South Linda',
		name: {
			firstName: 'Kevin',
			lastName: 'Yan',
		},
		state: 'West Virginia',
	},
	{
		address: '722 Emie Stream',
		city: 'Huntington',
		name: {
			firstName: 'John',
			lastName: 'Upton',
		},
		state: 'Washington',
	},
	{
		address: '1 Kuhic Knoll',
		city: 'Ohiowa',
		name: {
			firstName: 'Nathan',
			lastName: 'Harris',
		},
		state: 'Nebraska',
	},
];

export const SimpleTable = () => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<Person>[]>(
		() => [
			{
				accessorKey: 'name.firstName', //access nested data with dot notation
				header: 'First Name',
			},
			{
				accessorKey: 'name.lastName',
				header: 'Last Name',
			},
			{
				accessorKey: 'address', //normal accessorKey
				header: 'Address',
			},
			{
				accessorKey: 'city',
				header: 'City',
			},
			{
				accessorKey: 'state',
				header: 'State',
			},
		],
		[]
	);

	return (
		<Paper p="md" radius="md" withBorder>
			<Title order={5}>Simple</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={data}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
			/>
		</Paper>
	);
};
