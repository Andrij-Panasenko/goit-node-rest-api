const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const { DB_HOST, PORT} = process.env;

const contactsRouter = require("./routes/contactsRouter.js");
const registerRouter = require('./routes/auth/registerRouter.js');
const loginRouter = require('./routes/auth/loginRouter.js')

const app = express();

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
    console.log("Database connected successfuly");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); //підключення парсеру жсон формату

//endpoints
app.use("/api/contacts", contactsRouter);
app.use("/api/users/register", registerRouter);
app.use("/api/users/login", loginRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", name } = err;
  res.status(status).json({ message });
});

