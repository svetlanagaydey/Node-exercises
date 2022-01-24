const express = require('express');
//const mongoose = require('mongoose');
require('./db/mongoose');
const userRouter = require('./routers/user');
//const bcrypt = require('bcryptjs')
//const User = require('./models/user')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// const myFunction = async () => {
// 	const password = 'Red12345!'
// 	const hashedPassword = await bcrypt.hash(password, 8)

// 	console.log(password)
// 	console.log(hashedPassword)

// 	const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
// 	console.log(isMatch)
// }

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()