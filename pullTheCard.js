const jsonCard = require('./cards.json');

module.exports = class pulledCard{

    getCard({card}){
        if(card === '0' || card === '') 
            return console.log("deve ser informado um valor maior que 0");
        var cards = [];

        while(card > 0){
            var rand = Math.floor(Math.random() * 20);
            cards.push(jsonCard[rand]);
            card--;
        }
        return {'cards':cards.map(s => s.suit).join(''),'value':cards.map(n => n.number).reduce((a,b) => a+b, 0)};
    }
}


