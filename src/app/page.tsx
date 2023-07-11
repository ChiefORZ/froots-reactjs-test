import { PageContainer } from '@/components/PageContainer/PageContainer';
import { GalleryTable } from '@/scenes/gallery/GalleryTable';
import { getAlbums } from '@/services/albums';

export default async function Page() {
	const albums = await getAlbums();
	return (
		<PageContainer title="Gallery">
			<GalleryTable data={albums} />
		</PageContainer>
	);
}
