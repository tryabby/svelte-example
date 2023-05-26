<script lang="ts">
	import { useAbby } from '$lib/abby';
	import type { PageData } from './$types';
	import CookieResetButton from '../../components/cookieResetButton.svelte';

	export let data: PageData;
	const { variant, onAct } = useAbby('Home');
</script>

<div class="max-w-5xl flex flex-col justify-center mx-auto">
	<div class="mx-auto flex flex-col items-center pt-5">
		{#if $variant === 'A'}
			<p>You are seeing <b>Variant {$variant} </b></p>
		{:else if $variant === 'B'}
			<p>You are seeing <b>Variant {$variant} </b></p>
		{:else}
			<p>You are seeing <b>Variant {$variant} </b></p>
		{/if}
		<CookieResetButton css="bg-red-500" testName="New Test" />
	</div>
</div>
