const express = require('express');
const app = express();
const port = 5050;

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
    console.log(`hi! i'm express ${port}`)
});
