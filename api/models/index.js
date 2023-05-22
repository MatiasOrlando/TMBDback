const User = require("./User");
const Movie = require("./Movie");

User.belongsToMany(Movie, { through: "users_movies" });
Movie.belongsToMany(User, { through: "users_movies" });

module.exports = { User, Movie };
