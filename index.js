var readlineSync = require("readline-sync")
var chalk = require("chalk")

var score = 0 
var userName = readlineSync.question(chalk.red("What's your name ? "))

console.log(chalk.red.bgYellowBright.bold("Welcome ", userName , "to DoYouKnowMe"))

function play(question,answer) {
  var userAnswer = readlineSync.question(chalk.cyan(question));

  if(userAnswer === answer) {
    console.log(chalk.yellowBright("Right!"))
    score = score + 1;
  }else {
    console.log(chalk.red("Wrong :("))
  }

  console.log(chalk.magentaBright("Current score : ",score))
  console.log(chalk.whiteBright("*******************"))
}

var questions = [{
  question: "Where do I live ?  \n a.Mumbai \n b.Delhi \n c.Banglore \n d.Gujrat \n",
  answer: "Mumbai"
}, {
  question: "What is my age ? \n a.19 \n b.21 \n c.34 \n d.20 \n",
  answer: "21"
}];

for (var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}