const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/', (req, res) => {
    console.log("----- Received on " + req.hostname + req.url + " -----");
    console.log("Headers:")
    console.log(JSON.stringify(req.headers));
    console.log("Body:")
    console.log(req.body)
    res.status(200).send('');
});

app.listen(port, () => {
    console.log('Accepting webhooks [POST] on port ' + port);
});
