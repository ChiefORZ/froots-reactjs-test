'use client';

import { ImageCard } from '@/components/Card/ImageCard';
import { Album } from '@/services/albums/types';
import { Photo } from '@/services/photos/types';
import { Grid } from '@mantine/core';

interface PhotoGalleryProps {
	album: Album;
	photos: Photo[];
}

export function PhotoGallery(props: PhotoGalleryProps) {
	const { album, photos } = props;
	return (
		<Grid>
			{photos.map((photo) => (
				<Grid.Col key={photo.id} md={3} sm={6}>
					<ImageCard
						author={`${album.userId}`}
						image={photo.thumbnailUrl}
						title={photo.title}
					/>
				</Grid.Col>
			))}
		</Grid>
	);
}
