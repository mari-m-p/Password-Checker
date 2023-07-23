const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PasswordSchema = new mongoose.Schema({
  password: {
    type: String,
    select: false,
  },
  createdOn: {
    type: Date,
    default: new Date().toISOString(),
  },
});

// Encrypt password using bcrypt
PasswordSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

module.exports = mongoose.model("Password", PasswordSchema);
