<script>
     export let searchInput
  </script>
  
	<form method="get" action="/">
		<button bind:this={searchInput} type="submit">
			<figure>
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5C7.88376 0.5 6.77846 0.719859 5.74719 1.14702C4.71592 1.57419 3.77889 2.20029 2.98959 2.98959C2.20029 3.77889 1.57419 4.71592 1.14702 5.74719C0.719859 6.77846 0.5 7.88376 0.5 9C0.5 10.1162 0.719859 11.2215 1.14702 12.2528C1.57419 13.2841 2.20029 14.2211 2.98959 15.0104C3.77889 15.7997 4.71592 16.4258 5.74719 16.853C6.77846 17.2801 7.88376 17.5 9 17.5C10.1162 17.5 11.2215 17.2801 12.2528 16.853C12.8183 16.6187 13.3554 16.3247 13.8554 15.9767L18.9393 21.0607C19.5251 21.6464 20.4749 21.6464 21.0607 21.0607C21.6464 20.4749 21.6464 19.5251 21.0607 18.9393L15.9767 13.8554C16.3247 13.3554 16.6187 12.8183 16.853 12.2528C17.2801 11.2215 17.5 10.1162 17.5 9C17.5 7.88376 17.2801 6.77846 16.853 5.74719C16.4258 4.71592 15.7997 3.77889 15.0104 2.98959C14.2211 2.20029 13.2841 1.57419 12.2528 1.14702C11.2215 0.719859 10.1162 0.5 9 0.5ZM6.89524 3.91866C7.56253 3.64226 8.27773 3.5 9 3.5C9.72227 3.5 10.4375 3.64226 11.1048 3.91866C11.772 4.19506 12.3784 4.60019 12.8891 5.11091C13.3998 5.62164 13.8049 6.22795 14.0813 6.89524C14.3577 7.56253 14.5 8.27773 14.5 9C14.5 9.72227 14.3577 10.4375 14.0813 11.1048C13.8049 11.772 13.3998 12.3784 12.8891 12.8891C12.3784 13.3998 11.772 13.8049 11.1048 14.0813C10.4375 14.3577 9.72227 14.5 9 14.5C8.27773 14.5 7.56253 14.3577 6.89524 14.0813C6.22795 13.8049 5.62164 13.3998 5.11091 12.8891C4.60019 12.3784 4.19506 11.772 3.91866 11.1048C3.64226 10.4375 3.5 9.72227 3.5 9C3.5 8.27773 3.64226 7.56253 3.91866 6.89524C4.19506 6.22795 4.60019 5.62163 5.11091 5.11091C5.62163 4.60019 6.22795 4.19506 6.89524 3.91866Z" fill=""/>
			</svg>    
			<figcaption>
				Zoeken
			</figcaption>
			</figure>
		</button>
	  	<input id="search-wishes" type="search" name="q" />
		<label hidden for="search">Zoeken</label>
	</form>

  <style>
 /* Zoekbalk */
 form {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: var(--unit-small);
    }

    form input {
		width: 33vw;
        height: var(--unit-large);
        border: 2px solid var(--color-accent-75);
        border-radius: var(--unit-micro);
        padding: var(--unit-micro);

    }

    form button {
        transition: var(--animation-default) ease-in-out;
        border-radius: var(--unit-micro);
        padding: var(--unit-micro) var(--unit-small);
    }

    form button figure {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--unit-micro);
    }

    form button:is(:hover, :focus) {
        background-color: var(--color-blue);
    }

    form button svg, form button figcaption {
        fill: var(--color-primary-50);
        color: var(--color-primary-50);
    }

    form button:is(:hover, :focus) svg, form button:is(:hover, :focus) figcaption {
        color: var(--color-secundary);
        fill: var(--color-secundary);
    }
  </style>