const S = require("sequelize");
const db = require("../db");

class Movie extends S.Model {}

Movie.init(
  {
    movieId: {
      type: S.INTEGER,
      allowNull: false,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    genresList: {
      type: S.ARRAY(S.STRING),
    },
    overview: {
      type: S.TEXT,
    },
    vote_average: {
      type: S.FLOAT,
    },
    adult: {
      type: S.BOOLEAN,
    },
    poster_path: {
      type: S.TEXT,
    },
    backdrop_path: {
      type: S.TEXT,
    },
  },
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;
