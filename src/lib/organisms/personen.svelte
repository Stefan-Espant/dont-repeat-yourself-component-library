<script>

    import { Title, Image, LinkImage, TitleBeschrijving } from '$lib/index.js'

    import { onMount } from 'svelte';
        onMount(() => {

// Dit zijn de cordinaten van de div'jes, hier wordt de positie bepaald 
    const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// De kleuren die gebruikt worden bij de cursor trail
const colors = [
    "#0594c6", 
    "#00a1cd", 
    "#00adcf", 
    "#00b9ca", 
    "#00c4be", 
    "#00ceae", 
    "#00d698", 
    "#36de80", 
    "#73e465", 
    "#a3e848", 
    "#d1e929", 
    "#ffe700"
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});


// Deze functie volgt de bewegingen van je muis 
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  

// Met deze functie zorg je ervoor dat de div'jes, je cursor volgen. Daarnaast voeg je -12 toe om ervoor te zorgen dat je cursor
// in het midden zit van de div'jes  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

// Hiermee zorg je ervoor dat je trail de vorm krijgt van een druppel, elke cirkel wordt steeds iets kleiner.
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;


// Hier geef ik aan dat elke cirkel (elke div), afstand houdt van de andere DIV zodra de muis beweegt. Beweegt de muis niet meer
// komen de cirkels weer bij elkaar.
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
        });


</script>

<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>


<section class="persoon_section">

<article class="persoon_card">
  <Title />

  <Image />

  <TitleBeschrijving />

  <LinkImage />
</article>

</section>

<style>
.persoon_section {
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
background-color: var(--color-secundary);
padding-top: 1rem;
padding-bottom: 1rem;
}

.persoon_card {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 0px 30px black;
    width: 26rem;
    border-radius: 15px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 3rem;
}

.circle {
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-color: black;
  position: fixed; 
  filter: blur(5px);
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999; /* so that it stays on top of all other elements */
}

</style>