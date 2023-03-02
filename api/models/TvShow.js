const S = require("sequelize");
const db = require("../db");

class TvShow extends S.Model {}

TvShow.init(
  {
    tvShowId: {
      type: S.INTEGER,
      allowNull: false,
      unique: true,
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
    seasonCount: {
      type: S.INTEGER,
    },
    episodes: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "tvshow" }
);

module.exports = TvShow;
