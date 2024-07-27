import { User } from "../models/user.schema.js";
import { v4 as uuidv4 } from "uuid";
import { getUser, setUser } from "../service/auth.service.js";
const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
};
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  console.log("IUser", user);
  console.log(req.header);
  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const token = setUser(user);
  return res.json({ token });
};

export { handleUserSignup, handleUserLogin };
