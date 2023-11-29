<script>
	import NavLogo from '../atoms/navLogo.svelte';
	import Link from '../atoms/navLink.svelte';

	let mobileDropdownActive = true;

	function openMobileMenu() {
		mobileDropdownActive = !mobileDropdownActive;
	}
</script>

<section>
	<nav class="nav-bar">
		<NavLogo />

		<ul>
			<button class="Menu" on:click={openMobileMenu}>Menu</button>
			{#if mobileDropdownActive}
				<!-- {#each Link as Item} -->
				<Link href="/berichten" title="berichten"></Link>
				<Link href="/activiteiten" title="Activiteiten"></Link>
				<Link href="/Over strandeiland" title="Over strandeiland"></Link>
				<Link href="/planning" title="Planning"></Link>
				<Link href="/participatieteam" title="participatieteam"></Link>
				<Link href="/personen" title="Personen"></Link>
				<Link href="/organisaties" title="Organisaties"></Link>
				<Link href="/Wensen" title="Wensen"></Link>
				<!-- {/each} -->
			{/if}
		</ul>
	</nav>
</section>

<style>
	button {
		width: 70px;
	}

	.Menu {
		cursor: pointer;
		font-weight: bold;
		display: none;
	}

	/* Mobile nav */

	ul {
		/* margin-left: 1px; */
		overflow: auto;
		width: 100%;
		display: flex;
		justify-content: space-between;
		scroll-snap-type: x mandatory;
	}



	.nav-bar {
		min-width: 59em;
		display: flex;
		background-color: var(--color-secundary-pure);
		justify-content: space-between;
		border-bottom-style: solid;
		border-width: 0.5px;
	}

	@media (max-width: 400px) {
		.Menu {
			display: block;
		}

		ul {
			flex-direction: column;
			align-items: end;
			margin: 20px;
		}

		.nav-bar {
			min-width: 0px;
		}
	}
</style>
