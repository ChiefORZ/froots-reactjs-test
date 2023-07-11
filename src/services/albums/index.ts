import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { Album } from './types';

export const getAlbumById = async (albumId: string) => {
	const res = await fetcher<Album>(`/albums/${albumId}`);

	return res;
};

export const useAlbumById = (albumId: string) =>
	useQuery<Album>({
		queryFn: () => getAlbumById(albumId),
		queryKey: [`album`, albumId],
	});

export const getAlbums = async () => {
	const res = await fetcher<Album[]>('/albums');

	return res;
};

export const useAlbums = () =>
	useQuery<Album[]>({
		keepPreviousData: true,
		queryFn: () => getAlbums(),
		queryKey: ['albums'],
	});
