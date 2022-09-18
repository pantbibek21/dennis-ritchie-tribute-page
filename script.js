const quotes = document.querySelectorAll(".slider-wrapper .img-wrapper");
const nextBtn = document.querySelector(".fa-arrow-right-long");
const prevBtn = document.querySelector(".fa-arrow-left-long");
let index = 0;
nextBtn.addEventListener("click", () => {
    window.clearInterval(timeoutHandler);
    nextQuotesGenerator();
    timeoutHandler = setInterval(() => {
        nextQuotesGenerator();
    }, 4000);
});
prevBtn.addEventListener("click", previousQuoteGenerator);



function nextQuotesGenerator() {
    activeStatusRemover();
    index++;
    activeStatusAdder();
}
function previousQuoteGenerator() {
    activeStatusRemover();
    index--;
    activeStatusAdder();
}
function activeStatusRemover() {
    quotes.forEach((quote) => {
        quote.classList.remove("active");
    })
}

function activeStatusAdder() {
    if (index < quotes.length) {
        quotes[index].classList.toggle("active");
    }
    else {
        index = 0;
        quotes[index].classList.toggle("active");
    }
}


let timeoutHandler = setInterval(() => {
    nextQuotesGenerator();
}, 4000)