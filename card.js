//Sellecting all required buttons
let selectionOne = document.querySelector(".one");
let selectionTwo = document.querySelector(".two");
let selectionThree = document.querySelector(".three");
let selectionFour = document.querySelector(".four");
let selectionFive = document.querySelector(".five");
let submission = document.querySelector("#submit");

let mainCard = document.querySelector(".display")
let mainCard2 = document.querySelector(".display2")
let chosen = document.querySelector(".picked")
let refresh = document.querySelector(".reload")
let thankYou = document.querySelector(".thank-you-note")

//adding event listeners.

selectionOne.addEventListener("click", function(){
chosen.innerHTML = "1"
});
selectionTwo.addEventListener("click", function(){
    chosen.innerHTML = "2"
    });
selectionThree.addEventListener("click",  function(){
    chosen.innerHTML = "3"
    });
selectionFour.addEventListener("click",  function(){
    chosen.innerHTML = "4"
    });
selectionFive.addEventListener("click", function(){
    chosen.innerHTML = "5"
    });

submission.addEventListener("click", function() {
mainCard.style.display = "none"
mainCard2.style.display = "none"
thankYou.style.display = "grid"
mainCard.style.transition ="ease-in-out"

chosen.style.padding = "5px 5px"
});
refresh.addEventListener("click", function(){
    mainCard.style.display = "block"
    mainCard2.style.display = "block"
    thankYou.style.display = "none"
});
