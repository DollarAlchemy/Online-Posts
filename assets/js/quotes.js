// JavaScript function to load a random quote from /quotes/quotes.txt

document.addEventListener("DOMContentLoaded", function () {
    fetch("/quotes/quotes.txt") // Fetches the text file
        .then(response => response.text())
        .then(data => {
            let quotes = data.split("\n").filter(quote => quote.trim() !== ""); // Splits into an array, removes empty lines
            if (quotes.length > 0) {
                let randomIndex = Math.floor(Math.random() * quotes.length); // Picks a random quote
                document.getElementById("quote-box").innerText = quotes[randomIndex]; // Displays it in the quote box
            } else {
                document.getElementById("quote-box").innerText = "No quotes available.";
            }
        })
        .catch(error => {
            console.error("Error fetching quotes:", error);
            document.getElementById("quote-box").innerText = "Error loading quote.";
        });
});
