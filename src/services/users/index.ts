import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { User } from './types';

export const getUserById = async (userId: number) => {
	const res = await fetcher<User>(`/users/${userId}`);
	return res;
};

export const useUserById = (userId: number) =>
	useQuery<User>({
		keepPreviousData: true,
		queryFn: () => getUserById(userId),
		queryKey: ['users', 1],
	});

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
