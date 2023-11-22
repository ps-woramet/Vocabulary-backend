const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
const bodyParser = require('body-parser');

var Arr = []

app.use(cors())
app.use(bodyParser.json());

app.get('/api/getArr', (req, res) => {
    res.json(Arr)
});

app.post('/api/updateArr', (req, res) => {
    const obj = JSON.parse(req.body.data.jsonArr)
    Arr = obj
    res.json(Arr)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});