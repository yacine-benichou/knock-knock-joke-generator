const knockObject = {
    knock: "Knock Knock",
    question: "Who's there ?",
    shortName: ["Nobel", "Tank", "Luke", "Robin"],
    secondQuestion: "Who ?",
    joke: {
        Nobel: "Nobel...that's why i knocked!",
        Tank: "You're welcome",
        Luke: "Luke through the peep hole and find out",
        Robin: "Robin you. Give me your money!"
    }
};

let fullText = [];

const makeJoke = () => {
    const randomNumber1 = Math.floor(Math.random() * knockObject.shortName.length);
    
    for (let prop in knockObject) {
        switch (prop) {
            case 'shortName': 
                fullText.push(knockObject.shortName[randomNumber1]);
                break;
            case 'secondQuestion':
                fullText.push(`${knockObject.shortName[randomNumber1]} ${knockObject.secondQuestion}`);
                break;
            case 'joke':
                fullText.push(knockObject.joke[knockObject.shortName[randomNumber1]]);
                break;
            default:
                fullText.push(knockObject[prop]);
                break;
        }
    }
    return fullText.join('\n');
}

console.log(makeJoke());

let test = ["Knock Knock", "Who's there ?", "Tank Tank Who ? You're welcome"];