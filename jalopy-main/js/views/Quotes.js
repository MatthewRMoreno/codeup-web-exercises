
let quotes = [
    {
        quote: "War is organized murder and torture against our brothers.",
        author: "Alfred Adler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author: "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "I think God's justice is making wrongs right.",
        author: "Joel Osteen"
    },
    {
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "If science fiction is the mythology of modern technology, then its myth is tragic.",
        author: "Ursula K. Le Guin"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
]

export default function quotesHTMLFunction(props) {
    quotes = props.quotes;

    let html = buildTopHTML();
    html += addQuotes();
    html += buildBottomHTML();

    return html;
}

function buildTopHTML() {
    return `
        <h1 class="text-center">Quotes</h1>
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Quote</th>
                <th>Author</th>
        </tr>
        </thead>`;
}

function addQuotes() {
    let html = "";
    for (let i = 0; i < quotes.length; i++) {
        html += `
        <tr>
            <td>${quotes[i].quote}</td>
            <td>${quotes[i].author}</td>
        </tr>
        `;
    }
    return html;
}

function buildBottomHTML() {
    return `
        </table>
<!--        <a data-link href="/addQuote"><button id="quote-btn" class="btn-dark">Add New Quote</button></a>-->
<a data-link href="/addQuote">Add New Quote</a>
    `;

}

export function quotesJSFunction() {
    console.log(quotes);
}