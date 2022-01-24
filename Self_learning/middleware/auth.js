const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async(req, res, next) => {
  try {
    //console.log("auth middleware")
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token);
    const decoded = jwt.verify(token, 'mysecretfortoken');
    const user = await User.findOne({_id: decoded._id, "token": token});

    if (!user) {
        throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(410).send({error: 'Please authenticate'})
  }
}
module.exports = auth
