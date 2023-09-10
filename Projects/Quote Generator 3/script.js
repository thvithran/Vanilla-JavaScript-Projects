const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuote = [];

//show loading spinner 
function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//remove loading spinner
function removeLoadingSpinner(){
    quoteContainer.hidden = false;
    loader.hidden = true;
} 

// Show new quote
function newQuote(){
    showLoadingSpinner();

    //pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuote.length)];

    //if author field is blank replace it with 'unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine styling (long quote or short quote)
  if (quote.text.length > 115) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

   // Set Quote, Hide Loader
   quoteText.textContent = quote.text;
   removeLoadingSpinner();

   // Get Quotes From API
async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      newQuote();
    }
  }
  
  
  
  // Event Listeners
  newQuoteBtn.addEventListener('click', newQuote);
  
  // On Load
  getQuotes();
}
