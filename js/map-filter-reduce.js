const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let languageCount = users.filter(function(user) {
    return user.languages.length >= 3;
})
console.log(languageCount);

let userEmail = users.map(function(user) {
    return user.email;
})
console.log(userEmail);

let yearsExp = users.reduce(function(years, user) {
    return years + user.yearsOfExperience;
}, 0)
console.log(yearsExp);

let averageYearsExp = yearsExp/users.length;
console.log(averageYearsExp);

    let longestEmail = users.reduce(function (emails, user) {
        if (emails.length < user.email.length) {
            return user.email;
        }
        return emails
    }, "");

console.log(longestEmail);

let userString = users.reduce(function(userList, user) {
    return user.name + ", " + userList;
},"");
let userStringTwo = userString.substr(0, userString.length -2)
console.log("Your instructors are: " + userStringTwo)

//bonus
let uniqueLanguages = users.reduce(function(uniqueSoFar, user) {
        for (let language of user.languages) {
            uniqueSoFar.add(language)
        }
        return uniqueSoFar;
    }, new Set());
    console.log(uniqueLanguages);