// Accessing the elements

const quotes = document.querySelectorAll(".slider-wrapper .img-wrapper");
const nextBtn = document.querySelector(".fa-arrow-right-long");
const prevBtn = document.querySelector(".fa-arrow-left-long");

//setting array index 

let index = 0;

//adding event listener to next Button

nextBtn.addEventListener("click", () => {
    window.clearInterval(timeoutHandler);
    nextQuotesGenerator();
    timeoutHandler = setInterval(() => {
        nextQuotesGenerator();
    }, 4000);
});

//adding event listener to previous button
prevBtn.addEventListener("click", previousQuoteGenerator);

//function that changes the next slides

function nextQuotesGenerator() {
    activeStatusRemover();
    index++;
    activeStatusAdder();
}

//function that changes the previous slides

function previousQuoteGenerator() {
    activeStatusRemover();
    index--;
    activeStatusAdder();
}

//function that removes the active class on slider items 

function activeStatusRemover() {
    quotes.forEach((quote) => {
        quote.classList.remove("active");
    })
}

// function that adds the active sive status to sliders items

function activeStatusAdder() {
    if (index < quotes.length) {
        quotes[index].classList.toggle("active");
    }
    else {
        index = 0;
        quotes[index].classList.toggle("active");
    }
}

// This functions automatically changes the sliders items after 4 seconds

let timeoutHandler = setInterval(() => {
    nextQuotesGenerator();
}, 4000)