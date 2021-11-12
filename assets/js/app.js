const quotesApi = "http://quotes.stormconsultancy.co.uk/random.json";
const quotesContainer = document.querySelector(".quote-container");
const quoteAuthor = document.querySelector(".quote-author");
const quoteDesc = document.querySelector(".quote-desc");
const btnGetQuote = document.querySelector(".quote-button button");

function getQuote() {
  fetch(quotesApi)
    .then((response) => {
      return response.json();
    })
    .then((dataQuote) => {
      quoteAuthor.innerHTML = dataQuote.author;
      quoteDesc.innerHTML = dataQuote.quote;
    })
    .catch(function (error) {
      console.log(error);
    });
}
setTimeout(function () {
  btnGetQuote.addEventListener("click", () => {
    getQuote();
  });
}, 1000);

var auto_play;
quotesContainer.addEventListener("mouseover", () => {
  auto_play = false;
});
quotesContainer.addEventListener("mouseleave", () => {
  auto_play = true;
});
setInterval(() => {
  if (!auto_play) return getQuote();
}, 2000);
