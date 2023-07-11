import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PhotoGallery } from '@/scenes/album/PhotoGallery';
import { getAlbumById, getAlbums } from '@/services/albums';
import { getPhotoByAlbum } from '@/services/photos';

type AlbumPageProps = {
	params: { albumId: string };
};

export async function generateStaticParams() {
	const albums = await getAlbums();

	return albums.map((album) => ({
		albumId: `${album.id}`,
	}));
}

export default async function AlbumPage(props: AlbumPageProps) {
	const album = await getAlbumById(props.params.albumId);
	const photos = await getPhotoByAlbum(props.params.albumId);
	return (
		<PageContainer title={album.title}>
			<PhotoGallery album={album} photos={photos} />
		</PageContainer>
	);
}
