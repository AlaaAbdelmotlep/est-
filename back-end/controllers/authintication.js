const jwt = require("jsonwebtoken");

exports.userLogin = (req, res, next) => {
  
  if (req.body.email == "amr@gmail.com") {

    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "240s" }
    );

    res.json({ message: "Login Success", token, status: 200 });

  } else if (req.body.email == "retag@gmail.com") {

    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "240s" }
    );

    return res.json({ message: "Login Success", token, status: 200 });

  } else {

    return res.json({ message: "Unauthorizied" ,status: 401});
  }
};
