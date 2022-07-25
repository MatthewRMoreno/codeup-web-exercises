// highest level of detail: the HTML function
// focuses on the HTML for the overall screen
export default function dogFactsHTMLFunction(props) {
    return `
<div class="container">
    <h1 class="text-center">Dog Facts</h1>
    
    ${makeDogFactCards(props.dogFacts)}
    
    <button class="form-control" id="show-fact-btn">Show Facts</button>
</div>
`;
}

// next lower level of detail: the function for all of the card HTML
// uses a loop to iterate over the array and concats each card as it is made
// by the lowest level function
function makeDogFactCards(dogFacts) {
    let html = "";
    dogFacts.forEach(function(dogFact) {
        html += makeDogFactCard(dogFact);
    });
    return html;
}

// the lowest level function: assembles the HTML for a single dog fact card
// using the dog fact that is passed in as a parameter
function makeDogFactCard(dogFact) {
    return `
<div class="card">
    <div class="card-body">
        <p class="dog-fact" style="visibility: hidden">${dogFact}</p>
    </div>
</div>
        `;
}

export function DogFactsEvents() {
    const button = document.querySelector("#show-fact-btn");
    button.addEventListener("click", function(event) {
        let dogFacts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < dogFacts.length; i++) {
            dogFacts[i].style.visibility = "visible";
        }
    });
}