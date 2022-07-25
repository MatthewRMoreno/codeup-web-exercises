import createView from "../createView.js"

export default function AddQuoteView(props) {
    return `
        <form class="container">
            <h1 class="text-center">Add a New Quote</h1>
            <form>
                <label for="quote" class="form-label">New Quote</label>
                <input class="form-control" list="datalistOptions" id="quote" placeholder="Enter a New Quote">
                <label for="author" class="form-label">Author Name</label>
                <input class="form-control" list="datalistOptions" id="author" placeholder="Enter Author's Name">
                <button class="form-control" id="insert-btn">Insert Quote</button>
            </form>
        </div>
    `;
}

export function AddQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", insertQuote);
}

function insertQuote() {
    const quoteInput = document.querySelector("#quote")
    const quoteText = quoteInput.value.trim()

    const authorInput = document.querySelector("#author")
    const authorText = authorInput.value.trim();

    if(quoteText.length < 1) {
        alert("A quote cannot be blank", "danger");
        return;
    }

    if(authorText < 1) {
        authorText = "Anonymous"
    }

    const newQuote = {
        quote: quoteText,
        author: authorText
    }

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "venus-117"
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                console.log("add dog fact error: " + response.status);
            } else {
                console.log("insert quote ok");
                createView("/quotes");
            }
        });

}