const express = require('express');
const app = express();
const PORT = 3000;

app.put('/', (req, res) => {
    res.send('hello, world!')
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

