const express = require('express');
const fs = require('fs');
const app = express();
const users = require("./users.json");


app.get('', (req, res) => {
    res.send('<h1>Hello! Localhost 3000 created</h1>')
})

app.get('/raw-html', (req, res) => {
    res.send('<h1>Wellcome!</h1>')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})