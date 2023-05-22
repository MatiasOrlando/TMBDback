const express = require("express");
const router = express.Router();
const validateUser = require("../middleWare/auth");
const authController = require("../controllers/auth.controller");
const moviesController = require("../controllers/movies.controllers");

router.post("/register", authController.register);
router.post("/login", authController.logIn);
router.get("/me", validateUser, authController.me);
router.post("/logout", authController.logOut);
router.get("/infoUser", authController.infoUser);
router.put("/updateImg", authController.updateImg);
router.post("/addFavorites", moviesController.addFavorites);
router.delete("/removeFavorites", moviesController.removeFavorites);
router.get("/getAllFavs", moviesController.getAllFavs);

module.exports = router;
