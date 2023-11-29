<script>
	export let href, title;
</script>

<li>
	<a class="nav-link" {href}>{title}</a>
</li>

<style>
	.nav-link {
		margin: 30px;
		text-decoration: none;
		color: black;
		display: block;
	}

	li {
		list-style-type: none;
	}

	.nav-link:hover {
		transform: scale(1.1);
		transition-duration: 1s;
	}

	@media (max-width: 400px) {
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
