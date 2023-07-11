import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { Album } from './types';

export const getAlbumById = async (albumId: number) => {
	const res = await fetcher<Album>(`/albums/${albumId}`);

	return res;
};

export const useAlbumById = (albumId: number) =>
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
