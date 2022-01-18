const express = require("express");

const app = express();
const cors = require("cors");
var nodemailer = require("nodemailer");
const path = require("path");

app.use(express.json());
app.use(cors());

app.post("/mail", async (req, res) => {
  console.log(req.body);
  const frommail = req.body.email;
  const password = req.body.password;
  const tomail = "codemaster034@gmail.com";
  const subject = req.body.subject;
  const message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: frommail,
      pass: password,
    },
  });

  var mailOptions = {
    from: frommail,
    to: tomail,
    subject: subject,
    text: message,
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is Running");
});
