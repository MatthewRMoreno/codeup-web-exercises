export default function dogFactsHTMLFunction(props) {
    return `
<div class="container">
    <h1 class="text-center">Dog Facts</h1>
    
    ${makeDogFactCards(props.dogFacts)}
    
    <button class="form-control btn-dark" id="show-fact-btn">Show Facts</button>
</div>
<a data-link href="/insert-dog-fact">Insert Dog Fact</a>
`;
}

function makeDogFactCards(dogFacts) {
    let html = "";
    dogFacts.forEach(function(dogFact) {
        html += makeDogFactCard(dogFact);
    });
    return html;
}

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