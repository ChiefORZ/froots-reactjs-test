'use client';

import { Anchor, Paper, Text } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import { Album } from '@/services/albums/types';
import { IconChevronRight } from '@tabler/icons-react';

export const GalleryTable = ({ data }: { data: Album[] }) => {
	const columns = useMemo<MRT_ColumnDef<Album>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
				size: 0.2,
			},
			{
				accessorKey: 'userId',
				header: 'User ID',
				size: 0.2,
			},
			{
				Cell: ({ renderedCellValue }) => (
					<Text
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
					>
						{renderedCellValue}
					</Text>
				),
				accessorKey: 'title',
				header: 'Title',
				size: 0.6,
			},
		],
		[]
	);

	return (
		<Paper p="md" radius="md" withBorder>
			<MantineReactTable
				columns={columns}
				data={data}
				enableRowActions
				mantinePaperProps={{ shadow: '0', withBorder: false }}
				positionActionsColumn="last"
				renderRowActions={({ row }) => (
					<Anchor href={`/albums/${row.getValue('id')}`}>
						<IconChevronRight />
					</Anchor>
				)}
				renderTopToolbar={false}
			/>
		</Paper>
	);
};
