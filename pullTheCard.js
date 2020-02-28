const fs = require("fs");
const jsonCard = fs.readFileSync("../card.json")
const jsonContent = JSON.parse(jsonCard);

function getCard(numberCard){
    if(numberOfCards === '0' || numberOfCards === '') 
        return console.log("deve ser informado um valor maior que 0");
    let nap = null;
    let total = 0;
    for (; i < numberCard; i++) {
        var rand = Math.floor(Math.random() * 5);
        nap += jsonContent[rand].suit;
        total += jsonContent[rand].total;
    }
    var ret = {"suit": nap,"total":total};
    return ret;
}
