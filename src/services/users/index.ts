import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { User } from './types';

export const getUsers = async () => {
	const res = await fetcher<User[]>('/users');
	return res;
};

export const useUsers = () =>
	useQuery<User[]>({
		keepPreviousData: true,
		queryFn: () => getUsers(),
		queryKey: ['users'],
	});
