<script lang="ts">
	import { useFeatureFlag } from '../lib/abby';
	const clientFeature = useFeatureFlag('clientFlag');
	const serverFeature = useFeatureFlag('serverFlag');
</script>

<div class="bg-pink-200 flex flex-col items-center">
	<h1 class="text-5xl tracking-tight my-6 font-sans font-bold">
		A/B testing with Svelte and <bold class="mark mark">Abby </bold>
	</h1>
	<div class="flex flex-col">
		<p>
			In this demo we use cookies to assign a bucket with the variant to show. Visit one of the
			pages below and a bucket will be assigned to you.
		</p>

		<ul class="list-disc pl-4">
			<li><a class="text-gray-600 hover:text-gray-400" href="/home">/home</a></li>
			<li><a class="text-gray-600 hover:text-gray-400" href="/marketing">/marketing</a></li>
		</ul>
		{#if $clientFeature}
			<p class="mt-5">If you see this text the <b>client</b> flag is enabled</p>
		{/if}
		{#if $serverFeature}
			<p class="my-2">If you see this text the <b>server</b> flag is enabled</p>
			<div class="flex-col flex items-stretch max-w-2xl">
				<img
					alt="Rick Astley - Never Gonna Give You Up"
					src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTMzOTczMjA1YzAxNGJmMGY5YzI2MWFjODBhMWQ4NDhmOGNlM2NiZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Ju7l5y9osyymQ/giphy.gif"
				/>
			</div>
		{/if}
	</div>
</div>
