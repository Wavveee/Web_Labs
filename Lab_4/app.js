const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log("Files:", files);
});

const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
console.log(filePath);

const fs = require('fs');

fs.mkdir('testFolder', { recursive: true }, (err) => {
  if (err) throw err;

  fs.writeFile('testFolder/data.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log("File created");
  });
});

const fs = require('fs');

// читання
fs.readFile('testFolder/data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("Read:", data);
});

// допис
fs.appendFile('testFolder/data.txt', '\nNew line', (err) => {
  if (err) throw err;
  console.log("Updated");
});