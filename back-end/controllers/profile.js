const fs = require("fs");

const amrProfileObj = fs.readFileSync("./data/profile.json");

module.exports = (req, res, next) => {
  if (req.email == "amr@gmail.com") {

    const amrProfile = JSON.parse(amrProfileObj);

    res.status(200).json({ message: "Profile Date", amrProfile });

  } else if (req.email == "alaa@gmail.com") {

    res.status(200).json({ message: "Hi Alaa"});

  } else {
    throw new Error("Not Authorized.");
  }
};
