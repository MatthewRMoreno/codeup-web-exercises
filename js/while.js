// let i = 2;
// while(i <= 65536){
//     console.log(i);
//     i *= 2
// }
function iceCreamForSale() {
    let conesForSale = Math.floor(Math.random() * 50) + 50;
    while (conesForSale > 0) {
        let conesBought = Math.floor(Math.random() *5) + 1;
        if (conesBought > conesForSale) {
            console.log("Cannot sell you " + conesBought + " cones I only have " + conesForSale + "...");
        }
            conesForSale = conesForSale - conesBought;
            console.log(conesBought + " cones sold ...");
    }
        console.log("Yay! I sold them all!");
}