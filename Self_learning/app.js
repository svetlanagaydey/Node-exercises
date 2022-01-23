const express = require('express');
const mongoose = require('mongoose');
require('./db/mongoose');
const router = require('./routers/user');
const bcrypt = require('bcryptjs')
const User = require('./models/user')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const myFunction = async () => {
	const password = 'Red12345!'
	const hashedPassword = await bcrypt.hash(password, 8)

	console.log(password)
	console.log(hashedPassword)

	const isMatch = await bcrypt.compare('red12345!', hashedPassword)
	console.log(isMatch)
}

myFunction()