const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");

// Env varibales
dotenv.config({ path: "./config/config.env" });
let port = process.env.PORT || 6000;

// Routes
const password = require("./routes/password");

// DB
connectDb();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// APIs
app.use("/api/password", password);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
