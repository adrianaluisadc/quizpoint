const signUpSchema = require("../models/signup");


const userSignUp = async (req, res) => {
  
  let { name, userName, password } = req.body;
  let newUser = new signUpSchema({ name, userName, password });
  await newUser.save()
  
  res.render("registerMessage"); 
};
module.exports = userSignUp;
