
const quotes = [
    {
        text: "Your next chapter can begin with one small step.",
        author: "Anonymous"
    },
    {
        text: "Progress matters more than perfection.",
        author: "A Curious Mind"
    },
    {
        text: "Small efforts, repeated daily, create remarkable change.",
        author: "Anonymous"
    },
    {
        text: "You do not need to know everything to begin.",
        author: "Anonymous"
    },
    {
        text: "Every skill begins with a first attempt.",
        author: "The Lifelong Learner"
    },
    {
        text: "Let curiosity take you somewhere new.",
        author: "A Curious Mind"
    },
    {
        text: "Consistency makes ordinary moments meaningful.",
        author: "Your Future Self"
    },
    {
        text: "Make room for growth, even on difficult days.",
        author: "Anonymous"
    }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");
const copyQuoteButton = document.getElementById("copy-quote");
const status = document.getElementById("status");

let currentIndex = -1;

function showRandomQuote() {
    let nextIndex;

    do {
        nextIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && nextIndex === currentIndex);

    currentIndex = nextIndex;

    const quote = quotes[currentIndex];

    quoteText.textContent = quote.text;
    quoteAuthor.textContent = "— " + quote.author;
    status.textContent = "";
}

async function copyQuote() {
    const quote = quotes[currentIndex];
    const text = '"' + quote.text + '" — ' + quote.author;

    try {
        await navigator.clipboard.writeText(text);
        status.textContent = "Quote copied successfully!";
    } catch (error) {
        status.textContent =
            "Copy not available. Please copy the quote manually.";
    }
}

newQuoteButton.addEventListener("click", showRandomQuote);
copyQuoteButton.addEventListener("click", copyQuote);

showRandomQuote();
