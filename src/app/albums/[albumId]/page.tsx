import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PhotoGallery } from '@/scenes/album/PhotoGallery';
import { getAlbumById, getAlbums } from '@/services/albums';
import { getPhotoByAlbum } from '@/services/photos';
import { getUserById } from '@/services/users';

type AlbumPageProps = {
	params: { albumId: number };
};

export async function generateStaticParams() {
	const albums = await getAlbums();

	return albums.map((album) => ({
		albumId: `${album.id}`,
	}));
}

export default async function AlbumPage(props: AlbumPageProps) {
	const album = await getAlbumById(props.params.albumId);
	const user = await getUserById(album.userId);
	const photos = await getPhotoByAlbum(props.params.albumId);
	return (
		<PageContainer title={album.title}>
			<PhotoGallery photos={photos} user={user} />
		</PageContainer>
	);
}
