'use client';

import { ImageCard } from '@/components/Card/ImageCard';
import { Photo } from '@/services/photos/types';
import { User } from '@/services/users/types';
import { Box, Grid, Modal } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';

interface PhotoGalleryProps {
	photos: Photo[];
	user: User;
}

export function PhotoGallery(props: PhotoGalleryProps) {
	const { photos, user } = props;
	const [modalImageId, setModelImageId] = useState<number | undefined>(
		undefined
	);
	const handleOpenImageModal = (imageId: number) => {
		setModelImageId(imageId);
	};
	const closeImageModal = () => {
		setModelImageId(undefined);
	};

	const modalImage = photos.find((photo) => photo.id === modalImageId);

	return (
		<>
			<Grid>
				{photos.map((photo) => (
					<Grid.Col key={photo.id} md={3} sm={6}>
						<ImageCard
							author={user.name}
							id={photo.id}
							image={photo.thumbnailUrl}
							onClick={handleOpenImageModal}
							title={photo.title}
						/>
					</Grid.Col>
				))}
			</Grid>
			<Modal
				onClose={closeImageModal}
				opened={Boolean(modalImageId)}
				// size={700}
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'center',
				}}
				withCloseButton={false}
			>
				<Box h={450} />
				{modalImage ? (
					<Image
						alt={modalImage.title}
						fill
						src={modalImage.url}
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				) : null}
			</Modal>
		</>
	);
}
