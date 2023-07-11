import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: '/',
});

export const fetcher = async <Data>(url: string) => {
	const response = await api.request<Data, AxiosResponse<Data>>({
		headers: {
			'Content-Type': 'application/json',
		},
		url,
	});

	return response.data as Data;
};
