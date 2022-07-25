import homeHTMLFunction , {HomeEvents} from "./views/Home.js";
import aboutHTMLFunction, {AboutEvents} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import DogFactsView, {DogFactsEvents} from "./views/DogFacts.js";
import quotesHTMLFunction, {quotesJSFunction} from "./views/Quotes.js";
import InsertDogFactView, {InsertDogFactEvents} from "./views/AddDogFact.js";
import AddQuoteView, {AddQuoteEvents} from "./views/AddQuote.js"

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: homeHTMLFunction,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/quotes': {
            returnView: quotesHTMLFunction,
            state: {
                quotes: {
                    url: "https://quotes.fulgentcorp.com:12250/v1/quotes?random=false&limit=10",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "venus-117"
                    }
                }
            },
            uri: '/quotes',
            title: 'Quotes',
            viewEvent: quotesJSFunction
        },
        '/insert-dog-fact': {
            returnView: InsertDogFactView,
            state: {},
            uri: '/insert-dog-fact',
            title: 'Insert a Dog Fact',
            viewEvent: InsertDogFactEvents
        },
        '/addQuote': {
            returnView: AddQuoteView,
            state: {},
            uri: '/addQuote',
            title:'Add a New Quote',
            viewEvent: AddQuoteEvents
        },
        '/dogs': {
            returnView: DogFactsView,
            state: {
                dogFacts: {
                    url: "https://dogfacts.fulgentcorp.com:12250/v1/facts?random=false&limit=10",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': "venus-117"
                    }
                }
            },
            uri: '/dogs',
            title: 'Facts about Dogs',
            viewEvent: DogFactsEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/about': {
            returnView: aboutHTMLFunction,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: AboutEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}