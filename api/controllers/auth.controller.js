const User = require("../models/User");
const { generateToken } = require("../config/token");

const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    newUser && res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    !user && res.status(401).send(`No user found`);
    const validatedUser = await user.validatePassword(password);
    !validatedUser && res.status(401).send(`No authorization`);
    const { email, username: nickname, id } = user.dataValues;
    let payload = { id, nickname, email };
    const token = generateToken(payload);
    res.cookie("token", token);
    res.status(200).send(payload);
  } catch (error) {
    console.error("error");
  }
};

const me = async (req, res, next) => {
  res.send(req.user);
};

const logOut = (req, res) => {
  res.clearCookie("token").status(204).send(`User logged out`);
};

const infoUser = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send(`Invalid request, user not found`);
    return res.status(200).send(user);
  } catch (error) {
    console.error("error");
  }
};

const updateImg = async (req, res) => {
  const { email } = req.query;
  const { profileImg } = req.body;
  try {
    const [updatedRows, updatedUser] = await User.update(
      { profileImg },
      { where: { email }, returning: true }
    );
    return res.status(204).send(updatedUser);
  } catch (error) {
    console.error("error");
  }
};
module.exports = { register, logIn, me, logOut, infoUser, updateImg };
