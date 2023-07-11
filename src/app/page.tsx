import { PageContainer } from '@/components/PageContainer/PageContainer';
import { GalleryTable } from '@/scenes/gallery/GalleryTable';
import { getAlbums } from '@/services/albums';
import { getUsers } from '@/services/users';
import { User } from '@/services/users/types';

export default async function Page() {
	const albums = await getAlbums();
	const users = await getUsers();

	const computedAlbums = albums.map((album) => {
		const user = users.find((u) => u.id === album.userId) as User;
		return {
			...album,
			user,
		};
	});

	return (
		<PageContainer title="Gallery">
			<GalleryTable data={computedAlbums} />
		</PageContainer>
	);
}
