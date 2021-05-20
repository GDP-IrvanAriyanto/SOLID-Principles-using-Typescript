import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('SOLID Principles using Typescript');
});

app.listen(5000, () => console.log('Server running...'));