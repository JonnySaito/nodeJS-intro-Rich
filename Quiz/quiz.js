const process = require('process');
const fs = require('fs');

const questions = [
  'Is Eric Cantona the coolest Man United player in history?',
  'How many faces are there on a dodecahedron?',
  'How old is William Shatner?'
]

const correctAnswers = [
  'Yes',
  '12',
  '88'
]

let usersAnswers = [];
let userName;
let validUserName = false;
let fileName;
let correctCount = 0;

// triggered on loading "node quiz"
askName = () => {
    process.stdout.write(`Hello and welcome to the quiz.\nWhat is your name?\n`);
}

askQuestion = (num) => {
  process.stdout.write(`${questions[num]}\n`);
}

// input from user is converted to a string
process.stdin.on('data', function(answer){
  const inputAnswer = answer.toString().trim();
// convert input name to lowercase and make a filename using that name if that name doesn't already exist
  if(validUserName === false){
    userName = inputAnswer;
    fileName = inputAnswer.replace(/\s/g, '').toLowerCase();
    if(fs.existsSync(`./results/${fileName}.txt`)){
      process.stdout.write(`\nSorry, someone with the name ${userName} has already done the quiz.\n Please enter another name.\n`);
    } else {
// write heading into the file we just created
      const data = `Quiz results for ${inputAnswer}`;
      fs.writeFile(`./results/${fileName}.txt`, data, (err) => {
        if (err) throw err;
        validUserName = true;
        process.stdout.write(`\nThank you ${userName}. Let's start the quiz.\n`);
// start the quiz
        askQuestion(0);
      })
    }
  } else {
// taking answer from user and pushing it to the array called usersAnswers
      usersAnswers.push(inputAnswer);
      console.log(fileName);
// add answer to text file created earlier
      fs.appendFile(`./results/${fileName}.txt`, `\n${inputAnswer}`, (err) => {
        if (err) throw err;
        console.log('The answer was appended to the file! Yay!!');
      });

      let questionNum = usersAnswers.length;

      if(inputAnswer === correctAnswers[questionNum]){
          correctCount ++;
// check how many questions we've asked
          if(usersAnswers.length === questions.length){
            process.exit();
          } else {
            askQuestion(usersAnswers.length);
          }
      }
  }

});

askName();

process.on('exit', function(){
  process.stdout.write(`\nOK buddy, that's the end of the quiz.\n`);
});
