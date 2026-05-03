const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// головна сторінка
app.get('/', (req, res) => {
  res.send('Server works');
});

// отримати файли
app.get('/files', (req, res) => {
  fs.readdir('.', (err, files) => {
    if (err) return res.status(500).send(err);
    res.json(files);
  });
});

// запис у файл
app.post('/write', (req, res) => {
  const { text } = req.body;

  fs.writeFile('data.txt', text, (err) => {
    if (err) return res.status(500).send(err);
    res.send('Saved');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});