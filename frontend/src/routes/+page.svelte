<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.appName} | Catálogo de cuidados automotivos</title>
	<meta name="description" content="Catálogo informativo de cuidados para carros e motocicletas." />
</svelte:head>

<main class="mx-auto max-w-3xl px-6 py-16 sm:py-24">
	<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{data.appName}</h1>
	<p class="mt-4 text-lg text-muted-foreground">
		Catálogo informativo de cuidados para carros e motocicletas.
	</p>
	<p class="mt-8 border-t border-border pt-4">
		{data.apiOnline ? 'API disponível' : 'API indisponível'}
	</p>
</main>
