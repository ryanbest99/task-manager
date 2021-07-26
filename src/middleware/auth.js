const auth = async function (req, res, next) {
  console.log("auth Middleware");
  next();
};

module.exports = auth;
