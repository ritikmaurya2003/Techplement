function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quoteText").textContent = data.content;
            document.getElementById("author").textContent = `- ${data.author}`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}

document.addEventListener("DOMContentLoaded", getQuote);
