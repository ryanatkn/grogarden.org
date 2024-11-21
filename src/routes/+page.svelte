<script lang="ts">
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {gro_logo} from '@ryanatkn/fuz/logos.js';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
</script>

<main>
	<section class="box">
		<header class="box pt_xl">
			<a href="https://gro.ryanatkn.com/"><Svg data={gro_logo} size="var(--icon_size_xl)" /></a>
			<h1 class="mt_xl2">gro garden</h1>
		</header>
		<blockquote>genslop web garden for gro 🏞 work in progress</blockquote>
		<Card href="{base}/about" icon={''}>about</Card>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
