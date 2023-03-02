const User = require("./User");
const Movie = require("./Movie");
const TvShow = require("./TvShow");

User.belongsToMany(TvShow, { through: "users_series" });
TvShow.belongsToMany(User, { through: "users_series" });

User.belongsToMany(Movie, { through: "users_movies" });
Movie.belongsToMany(User, { through: "users_movies" });

module.exports = { User, Movie, TvShow };
