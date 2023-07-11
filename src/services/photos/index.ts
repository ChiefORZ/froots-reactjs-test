import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { Photo } from './types';

export const getPhotos = async () => {
	const res = await fetcher<Photo[]>('/photos');

	return res;
};

export const usePhotos = () =>
	useQuery<Photo[]>({
		keepPreviousData: true,
		queryFn: () => getPhotos(),
		queryKey: ['photos'],
	});

export const getPhotoByAlbum = async (albumId: number) => {
	const resourceUrl = `/photos${albumId && `?albumId=${albumId}`}`;
	const res = await fetcher<Photo[]>(resourceUrl);

	return res;
};

export const usePhotosByAlbum = (albumId: number) =>
	useQuery<Photo[]>({
		keepPreviousData: true,
		queryFn: () => getPhotoByAlbum(albumId),
		queryKey: [`photos`, albumId],
	});
