const express = require("express");
const router = express.Router();
const authValidator = require("../validators/authValidator");
const authController = require("../controllers/authController");
// const imgController = require("../controllers/imgController");
const auth = require("../middleware/authorization");

router.post(
  "/signUp",
  authValidator.checkUserSignUp,
  authController.userSignUp
);

// router.post("/login", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).send({
//         success: false,
//         message: "Both Email and Password are required",
//       });
//     }
//     //check if users exists
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       return res.status(400).send({
//         success: true,
//         message: "Logged In",
//       });
//     } else {
//       return res.status(400).send({
//         success: false,
//         message: " Invalid User",
//       });
//     }
//   } catch (error) {
//     res.send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

module.exports = router;
