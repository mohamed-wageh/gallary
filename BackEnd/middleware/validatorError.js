const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
module.exports = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessage = errors
    .array()
    .map((el) => el.msg)
    .join(" & ");

  if (!errors.isEmpty()) {
    return next(new AppError(errorMessage, 422));
  }
  next();
};
