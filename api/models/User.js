const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  async validatePassword(password) {
    const hashedPasswordInput = await bcrypt.hash(password, this.salt);
    return hashedPasswordInput === this.password;
  }
}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    profileImg: {
      type: S.STRING,
      defaultValue:
        "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
    },
    salt: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.addHook("beforeCreate", async (user) => {
  if (!user.password) return;
  try {
    const salt = bcrypt.genSaltSync(9);
    user.salt = salt;
    const hashedPassword = await bcrypt.hash(user.password, user.salt);
    return (user.password = hashedPassword);
  } catch (error) {
    throw new Error("PASSWORD ERROR");
  }
});

module.exports = User;
