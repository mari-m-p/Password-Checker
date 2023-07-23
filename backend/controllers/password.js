const Password = require("../models/Password");

exports.savePassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    const result = await Password.create({
      password,
    });

    res.json({
      success: true,
      message: "Password saved successfully",
      result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
