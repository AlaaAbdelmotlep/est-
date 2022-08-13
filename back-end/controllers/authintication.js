const jwt = require("jsonwebtoken");

exports.userLogin = (req, res, next) => {

  console.log(req.body);
  
  if (req.body.email == "amr@gmail.com") {

    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "24h" }
    );

    res.status(200).json({ message: "Login Success", token });

  } else if (req.body.email == "alaa@gmail.com") {

    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "24h" }
    );

    res.status(200).json({ message: "Login Success", token });

  } else {
    throw new Error("Not Authorized.");
  }
};
