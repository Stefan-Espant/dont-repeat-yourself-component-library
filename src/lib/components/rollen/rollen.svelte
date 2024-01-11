<script>
	import { onMount } from 'svelte';

	let activeId;

	$: activeId;

	let count = 0;
	let count2 = 0;
	let count3 = 0;

	let output;
	let output2;
	let output3;
	let buttonList;

	function countClicks() {
		count++;
		output.innerHTML = count;
		document.getElementById('text').style.display = 'flex';
	}
	function countClicks2() {
		count2++;
		output2.innerHTML = count2;

		document.getElementById('text').style.display = 'flex';
	}
	function countClicks3() {
		count3++;
		output3.innerHTML = count3;

		document.getElementById('text').style.display = 'flex';
	}

	onMount(() => {
		// Voegt nummers toe
		output = document.getElementById('output');
		output2 = document.getElementById('output2');
		output3 = document.getElementById('output3');
		
		buttonList = document.querySelectorAll('.button');
		console.log('output:', output)
		console.log('buttonList:', buttonList);
		// Voegt class toe
		buttonList.forEach((button) => {
			button.addEventListener('click', () => {
				console.log('buttonId', button.id);
				activeId = button.id;
				console.log(activeId);
			});
		});
	});

	// Component Rollen functie
</script>

<section>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>

	<article class="rollen">
		<p id="text">Jou rol is opgeslagen!</p>
		<div class="btn" id="mydiv">
			<button on:click={countClicks} id="wens" class="button" class:active={activeId == 'wens'}
				>Ik deel deze wens</button
			>
			<button on:click={countClicks2} id="helpen" class="button" class:active={activeId == 'helpen'}
				>Ik wil helpen</button
			>
			<button
				on:click={countClicks3}
				id="trekken"
				class="button"
				class:active={activeId == 'trekken'}>Ik wil trekker zijn</button
			>
		</div>
	</article>

	<article>
		<ul>
			<li>Aantal mensen die dit delen: <span class="bold" id="output">{count}</span></li>
			<li>Aantal helpers: <span class="bold" id="output2">{count2}</span></li>
			<li>Aantal trekkers: <span class="bold" id="output3">{count3}</span></li>
		</ul>
	</article>

	<article>
		<p>
			Deel dit: <a href=""><i style="font-size:24px" class="fa">&#xf08c;</i></a>
			<a href=""><i style="font-size:24px" class="fa">&#xf09a;</i></a>
		</p>
	</article>
</section>

<style>
	.bold{
		font-weight: 700;
	}
	.rollen{
		align-items: 'center';
	}
	#text {
		display: none;
		background-color: lightgreen;
		justify-content: center;
		font-weight: 600;
		font-size: 1.2em;
		align-items: center;
		margin-bottom: 15px;
		height: 100px;
	}
	article {
		padding: 1em 0 1em 0;
	}
	.active {
		background-color: lightgreen;
		color: black;
	}
	section {
		margin: 30px;
	}

	.titel {
		font-size: 30px;
		margin-top: 20px;
	}

	.btn {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	button {
		background-color: black;
		color: white;
		display: flex;
		align-items: center;
		width: 100%;
		border: unset;
		height: 35px;
		border-radius: var(--unit-micro);
		padding: var(--unit-micro) var(--unit-defalit) var(--unit-micro) 0.8em;
		transition: 0.2s ease-in-out;
		justify-content: center;
	}

	button.special {
		background-color: blueviolet;
	}
	/* button:is(:hover, :focus) {
		background-color: var(--color-blue);
	}
	button:is(:focus) {
		background-color: green;
	} */

	.knop {
		padding: 10px;
	}

	article ul {
		list-style: none;
	}
</style>
