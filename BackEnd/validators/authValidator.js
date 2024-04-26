const { body, check, param } = require("express-validator");
const validatorError = require("../middleware/validatorError");

exports.checkUserSignUp = [
  body("userName")
    .isLength({ min: 3, max: 30 })
    .withMessage("Username should be between 3 and 30 characters"),

  body("password")
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    })
    .withMessage(
      "Password should be at least 6 characters with at least 1 upper case letter"
    ),
  body("phoneNumber")
    .isLength({ min: 9, max: 13 })
    .withMessage("Phone number should be between 9 and 11 characters"),
  validatorError,
];

exports.checkSignIn = [
  body("usernameOrPhone")
    .isLength({ min: 3, max: 30 })
    .withMessage("usernameOrPhone should be between 3 and 30 characters"),

  body("password")
    .isLength({ min: 1 })
    .withMessage("Password should be at least 1 character"),
  validatorError,
];

exports.checkPhoneNumber = [
  body("phonenumber")
    .isLength({ min: 9, max: 13 })
    .withMessage("Phone number should be between 9 and 13 characters"),
  validatorError,
];

exports.checkUpdateForgottenPassword = [
  body("newPassword")
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    })
    .withMessage(
      "Password should be at least 6 characters with at least 1 upper case letter"
    ),

  validatorError,
];
