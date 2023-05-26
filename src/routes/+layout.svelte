<script lang="ts">
	import { AbbyProvider, __abby__, withDevTools } from '$lib/abby';
	import type { LayoutServerData } from './$types';
	import '../app.css';

	export let data: LayoutServerData;
	const DevTools = withDevTools();
</script>

<AbbyProvider {data} abby={__abby__}>
	<header class="bg-pink-300 py-3">
		<DevTools abby={__abby__} props={{ defaultShow: true }} />
		<ul class="flex space-x-10 pl-10">
			<li>
				<a href="/">Back to index</a>
			</li>
			<li>
				<a href="/home"> Home </a>
			</li>
			<li>
				<a href="/marketing">Marketing</a>
			</li>
		</ul>
	</header>
	<slot />
</AbbyProvider>
