const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedJwt) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedJwt);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
}

module.exports = { requireAuth };
