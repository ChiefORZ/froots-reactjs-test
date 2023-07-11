import { useConfigStore } from '@/stores/config';
import { Group, Radio } from '@mantine/core';

export const DirectionSwitcher = () => {
	const { direction, setDirection } = useConfigStore();

	return (
		<Radio.Group
			label="Direction"
			name="direction"
			onChange={setDirection}
			value={direction}
		>
			<Group mt="sm">
				<Radio label="LTR" value="ltr" />
				<Radio label="RTL" value="rtl" />
			</Group>
		</Radio.Group>
	);
};
