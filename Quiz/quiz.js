const process = require('process');
const fs = require('fs');

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];

let userName;
let validUserName = false;

askName = () => {
    process.stdout.write(`Hello and welcome to the quiz\nWhat is your name?\n`);
}

askQuestion = (num) => {
  process.stdout.write(`${questions[num]}\n`);
}

process.stdin.on('data', function(answer){
  const inputAnswer = answer.toString().trim();

  if(validUserName === false){
    userName = inputAnswer;
    const fileName = inputAnswer.replace(/\s/g, '').toLowerCase();
    if(fs.existsSync(`./results/${fileName}.txt`)){
      process.stdout.write(`\nSorry, someone with the name ${userName} has already completed the quiz, please enter another name (full name, nickname, etc)\n`);
    } else {
      const data = `Quiz Results for ${inputAnswer}`;
      fs.writeFile(`./results/${fileName}.txt`, data, (err) => {
        if (err) throw err;
        validUserName = true;
        process.stdout.write(`\nThank you ${userName} lets start the quiz.\n`);
        askQuestion(0);
      })
    }
  } else {
    // This is where we will run the quiz
    console.log(inputAnswer);
  }

});

askName();
