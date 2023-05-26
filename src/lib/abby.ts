import { createAbby } from '@tryabby/svelte';


export const {
	useAbby,
	AbbyProvider,
	useFeatureFlag,
	withAbby,
	__abby__,
	getABResetFunction,
	withDevTools
} = createAbby({
	projectId: 'clg0i3xdc0000mfh7lg0mbvnf',
	currentEnvironment: 'default', //process.env.NODE_ENV,
	tests: {
		Home: {
			variants: ['A', 'B', 'C']
		},
		Marketing: {
			variants: ['b', 'c', 'original']
		}
	},
	flags: ['clientFlag', 'serverFlag']
});
