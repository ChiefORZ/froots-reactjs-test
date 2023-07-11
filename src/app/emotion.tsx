'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	const cache = useEmotionCache();
	cache.compat = true;

	useServerInsertedHTML(() => (
		<style
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' '),
			}}
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
		/>
	));

	return <CacheProvider value={cache}>{children}</CacheProvider>;
}
