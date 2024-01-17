const fs = require('fs');
const path = require('path');
const readLine = require('readline');

const file = path.join(__dirname, 'write-file.txt');
const writeStream = fs.createWriteStream(file);
const readfile = readLine.createInterface(process.stdin, process.stdout);
const { stdin, stdout } = process;

readfile.write('Welcome, please enter text\n');

readfile.on('line', (string) => {
  if (string === 'exit') {
    stdout.write('Hanks for checking! Have a nice day!');
    process.exit();
  }
  writeStream.write(string + '\n');
});

readfile.on('SIGINT', () => {
  stdout.write('Hanks for checking! Have a nice day!');
  process.exit();
});
