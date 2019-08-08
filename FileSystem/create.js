const fs = require('fs');
const process = require('process');

function startMessage(){
  process.stdout.write(`What is your name?\n`);
}

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
  const data = `Hello there ${inputAnswer}`;
  fs.writeFile('message2.txt', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      process.exit();
  })
});

startMessage();

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
