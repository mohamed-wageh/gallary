const jwt = require("jsonwebtoken");
require("dotenv").config();
const AppError = require("../utils/appError");

module.exports = async (req, res, next) => {
  try {
    let jwtToken;

    if (req.headers.authorization) {
      jwtToken = req.headers.authorization.replace("Bearer ", "");
    }

    if (!jwtToken) {
      return next(
        new AppError("You aren't logged in, please log in to get access", 401)
      );
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.userId = payload.userId;
    req.userType = payload.userType;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json("unauthorized access");
  }
};
