const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/contactsRouter.js");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); //підключення парсеру жсон формату

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});

// REDIRECT
// app.get('/home', (req, res) => {
//   res.send(console.log('home page'))
// })

// app.get('/old-home', (req, res) => {
//   res.redirect('/home')
// })
