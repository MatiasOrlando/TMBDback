const Movie = require("../models/Movie");
const User = require("../models/User");

const addFavorites = async (req, res) => {
  try {
    const { email, movieId, title, vote_average, poster_path, adult } =
      req.body;
    const user = await User.findOne({ where: { email } });
    const newMovie = await Movie.findOrCreate({
      where: {
        movieId,
        title,
        vote_average,
        poster_path,
        adult,
      },
      include: { model: User },
    });
    newMovie[0].addUser(user);
    res.status(201).send(newMovie);
  } catch (error) {
    console.log(error);
  }
};

const removeFavorites = async (req, res) => {
  const { id } = req.query;
  try {
    await Movie.destroy({
      where: {
        id,
      },
      include: { model: User },
    });
    res.status(204).send(`Deleted from Favorites`);
  } catch (error) {
    console.log("service error", error);
  }
};

const getAllFavs = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findByPk(id);
    const movies = await Movie.findAll({
      include: [
        {
          model: User,
          where: {
            id: user.id,
          },
          required: true,
        },
      ],
    });
    res.status(200).send(movies);
  } catch (error) {
    console.log("service All user movies error", error);
  }
};

module.exports = { addFavorites, removeFavorites, getAllFavs };
