const magicBall = [
    //Positive Answers
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to a yes",
    //Neutral Answers
    "Reply hazy try again",
    "Better no tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    //Negative Answers
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no"
]

console.log(magicBall[Math.floor(Math.random() * 20)]);
