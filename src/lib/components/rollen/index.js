
// Component Rollen functie 
const actielist = document.querySelectorAll('.btn');

actielist.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        buttons.classList.add('special');
    });
});

// Component Rollen functie 
var header = document.getElementById("mydiv");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current =
            document.getElementsByClassName("active");
        current[0].className =
            current[0].className.replace("active", "");
        this.className += "active";
    });
}




// Button disable maken wanneer je er op klikt 
// capturing the button using its id
const button1 = document.getElementById("button");

// function to disable the button
const disableButton = () => {
    button1.disabled = true;
};

// calling the disableButton() function when the click event happens
button1.addEventListener("click", disableButton);



var count = 0;
var output = document.getElementById('output');
function countClicks() {
    count++;
    output.innerHTML = count;
};