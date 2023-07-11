import { ColorScheme } from '@mantine/core';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConfigStore {
	direction: 'ltr' | 'rtl';
	colorScheme: ColorScheme;
	setDirection: (direction: 'ltr' | 'rtl') => void;
	setColorScheme: (colorScheme: ColorScheme) => void;
}

export const useConfigStore = create<ConfigStore>()(
	persist(
		(set) => ({
			colorScheme: 'light',
			direction: 'ltr',
			setColorScheme: (colorScheme: ColorScheme) => set({ colorScheme }),
			setDirection: (direction: 'ltr' | 'rtl') => set({ direction }),
		}),
		{ name: 'config-storage' }
	)
);
