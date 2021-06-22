const User = require("../db/models/user")

// middleware function to ensure Admin status
function ensureAdmin(req, res, next) {
  if (req.user && req.user.userStatus === 'ADMIN') {
    next()
  } else {
    res.sendStatus(403)
  }
}

// middleware function to check if the request is a user
const isUser = async (req, res, next) => {
  // console.log(req.body.token)
  const user = await User.findByToken(req.body.token)
  // console.log(user)
  if(user.id) {
    next()
  } else {
    res.sendStatus(403)
  }
}

// middleware function to check if the user is logged in
// function isLoggedIn (req, res, next) {
//   console.log(req.params)
//   if(req.params.token) {
//     next()
//   } else {
//     res.sendStatus(403)
//   }
// }


module.exports = {
  ensureAdmin,
  isUser,
  // isLoggedIn
}
