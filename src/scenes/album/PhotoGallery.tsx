'use client';

import { ImageCard } from '@/components/Card/ImageCard';
import { Photo } from '@/services/photos/types';
import { User } from '@/services/users/types';
import { Grid } from '@mantine/core';

interface PhotoGalleryProps {
	photos: Photo[];
	user: User;
}

export function PhotoGallery(props: PhotoGalleryProps) {
	const { photos, user } = props;
	return (
		<Grid>
			{photos.map((photo) => (
				<Grid.Col key={photo.id} md={3} sm={6}>
					<ImageCard
						author={user.name}
						image={photo.thumbnailUrl}
						title={photo.title}
					/>
				</Grid.Col>
			))}
		</Grid>
	);
}
