<script>
	import NavLogo from '../atoms/navLogo.svelte';

	let mobileDropdownActive = true;

	function openMobileMenu() {
		mobileDropdownActive = !mobileDropdownActive;
	}
</script>

<section>
	<nav class="nav-bar">
		<NavLogo></NavLogo>

		<ul>
			<button class="Menu" on:click={openMobileMenu}>Menu</button>
			{#if mobileDropdownActive}
				<li>
					<div><a class="nav-link" href="/Berichten">Berichten</a></div>
				</li>
				<li>
					<div><a class="nav-link" href="/Activiteiten">Activiteiten</a></div>
				</li>
				<li>
					<a class="nav-link" href="/Over Strandeiland">Over Strandeiland</a>
				</li>
				<li>
					<a class="nav-link" href="/Planning">Planning</a>
				</li>
				<li>
					<a class="nav-link" href="/Participatieteam">Participatieteam</a>
				</li>
				<li>
					<a class="nav-link" href="/Personen">Personen</a>
				</li>
				<li>
					<a class="nav-link" href="/Organisaties">Organisaties</a>
				</li>
				<li>
					<a class="nav-link" href="/Wensen">Wensen</a>
				</li>
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

	/* Image */

	/* img {
		margin: 12px;
		width: 70px;
		height: 70px;
	} */

	/* Mobile nav */

	ul {
		/* margin-left: 1px; */
		overflow: auto;
		width: 100%;
		display: flex;
		justify-content: space-between;
		scroll-snap-type: x mandatory;
	}

	li {
		list-style-type: none;
	}

	.nav-bar {
		min-width: 59em;
		display: flex;
		background-color: var(--color-secundary-pure);
		justify-content: space-between;
		border-bottom-style: solid;
		border-width: 0.5px;
	}

	.nav-link {
		margin: 30px;
		text-decoration: none;
		color: black;
		display: block;
	}

	.nav-link:hover {
		transform: scale(1.1);
		transition-duration: 1s;
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

		.nav-link {
			padding-top: 10px;
			margin: 10px;
		}
		.nav-link:hover {
			transform: scale(1.1);
			transition-duration: 1s;
			background-color: yellow;
			border-radius: 20px;
			padding: 10px;
		}
	}
</style>
