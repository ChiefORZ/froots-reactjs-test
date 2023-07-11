'use client';

import { Group, Text, rem, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';

export const UploadForm = () => {
	const theme = useMantineTheme();
	return (
		<Dropzone
			accept={IMAGE_MIME_TYPE}
			maxSize={Math.sqrt(3 * 1024)}
			onDrop={(files) => console.log('accepted files', files)}
			onReject={(files) => console.log('rejected files', files)}
		>
			<Group
				position="center"
				spacing="xl"
				style={{ minHeight: rem(220), pointerEvents: 'none' }}
			>
				<Dropzone.Accept>
					<IconUpload
						color={
							theme.colors[theme.primaryColor][
								theme.colorScheme === 'dark' ? 4 : 6
							]
						}
						size="3.2rem"
						stroke={1.5}
					/>
				</Dropzone.Accept>
				<Dropzone.Reject>
					<IconX
						color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
						size="3.2rem"
						stroke={1.5}
					/>
				</Dropzone.Reject>
				<Dropzone.Idle>
					<IconPhoto size="3.2rem" stroke={1.5} />
				</Dropzone.Idle>

				<div>
					<Text inline size="xl">
						Drag images here or click to select files
					</Text>
					<Text color="dimmed" inline mt={7} size="sm">
						Attach as many files as you like, each file should not exceed 5mb
					</Text>
				</div>
			</Group>
		</Dropzone>
	);
};
