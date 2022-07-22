import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 class="text-center">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img class="tractor" src="assets/jalopy1.jpeg">
                <p>
                    Welcome to my Jalopy application!
                </p>
                <button class="btn btn-dark" id="img-button">Click Me!</button>    
            </div>
        </main>
    `;
}

export function HomeEvents() {
    let imgButton = document.getElementById("img-button")
    let counter = 1
    imgButton.addEventListener("click", function() {
        let changeImg = document.querySelector(".tractor")
        if (counter == 0) {
            changeImg.src = "assets/jalopy1.jpeg";
            counter++;
        } else if (counter == 1) {
            changeImg.src = "assets/jalopy2.jpeg";
            counter++;
        } else if (counter == 2) {
            changeImg.src = "assets/jalopy3.jpeg";
            counter = 0;
        }
    })
}