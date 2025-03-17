// JavaScript function to load a random quote from /quotes/quotes.json
document.addEventListener("DOMContentLoaded", function () {
    fetch("quotes/quotes.json") // Fetch JSON file instead of .txt
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            if (!data.quotes || data.quotes.length === 0) {
                throw new Error("No quotes found in the file.");
            }
            let quotes = data.quotes; // Get the quotes array
            let randomIndex = Math.floor(Math.random() * quotes.length); // Pick a random quote
            document.getElementById("quote-box").innerText = `"${quotes[randomIndex]}"`; // Display the quote
        })
        .catch(error => {
            console.error("Error fetching quotes:", error);
            document.getElementById("quote-box").innerText = "Error loading quote.";
        });
});
