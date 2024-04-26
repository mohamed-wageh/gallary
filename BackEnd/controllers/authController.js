const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
require("dotenv").config();
const catchAsyncError = require("../utils/catchAsyncError");
const User = require('../models/userModel');

//username check:
exports.isUsernameExist = catchAsyncError(async (req, res, next) => {
  try {
    const { username } = req.body;

    const studio = await pool.query(
      `SELECT * FROM studios WHERE "studioUsername" = $1`,
      [username]
    );
    const client = await pool.query(
      `SELECT * FROM clients WHERE "clientUsername" = $1`,
      [username]
    );

    // check if user exists
    if (studio.rows.length !== 0 || client.rows.length !== 0) {
      return res.status(401).json('Username already exists'); // 401 unauthenticated
    }
    res.status(200).json('New user');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

//phone number check:
//(signup and forgot password):
exports.isPhoneNumberExists = catchAsyncError(async (req, res, next) => {
  try {
    const { phonenumber, isForgetPassword } = req.body;

    const client = await pool.query(
      `SELECT "clientId" FROM clients WHERE "clientPhoneNumber" = $1`,
      [phonenumber]
    );

    if (isForgetPassword) {
      if (!client.rowCount) {
        return res.status(404).json('Phone Number not found');
      }
      return res.status(200).json({ clientId: client.rows[0].clientId });
    }

    // For sign-up:
    if (client.rows.length !== 0) {
      return res
        .status(401)
        .json('Phone Number is associated with another account');
    }

    res.status(200).json('success');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

exports.userSignUp = catchAsyncError(async (req, res, next) => {
  try {
    const { userName, email, password, phoneNumber, role } = req.body;
    const profilePictureUrl = "test";
    //bcrypt password:
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

//save hashpassword in database
    const hashPasswords = async () => {
      await Promise.all(
        User.map(async user => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        })
      );
    };

    //create new user
    const user = await User.create({
      userName,
      email,
      password: bcryptPassword,
      role,
      phoneNumber,
      profilePictureUrl,
    });

    if (user) {
      res.status(201).send({
        success: true,
        message: "User created successfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        message: " Invalid User",
      });
    }

  } catch (err) {
    console.error(err.message);
    res.send({
      success: false,
      message: err.message
    });
  }
  }
);
