<script lang="ts">
	import { AbbyProvider, __abby__, withDevTools } from '$lib/abby';
	import type { LayoutServerData } from './$types';
	import '../app.css';

	export let data: LayoutServerData;
	const DevTools = withDevTools();
</script>

<AbbyProvider {data} abby={__abby__}>
	<header class="bg-pink-200 py-3 border-b border-pink-400 shadow-sm">
		<DevTools abby={__abby__} props={{ defaultShow: true }} />
		<nav>
			<ul class="flex space-x-10 pl-10">
				<li>
					<a class="hover:text-gray-100 text-black no-underline" href="/">Back to index</a>
				</li>
				<li>
					<a class="hover:text-gray-100 text-black no-underline" href="/home"> Home </a>
				</li>
				<li>
					<a class="hover:text-gray-100 text-black no-underline" href="/marketing">Marketing</a>
				</li>
			</ul>
		</nav>
	</header>
	<slot />
</AbbyProvider>
