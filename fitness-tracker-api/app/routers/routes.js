let express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");
let ingredientController = require("../controllers/ingredient.controller");
let recipeController = require("../controllers/recipe.controller");
let diaryController = require("../controllers/diary.controller");

// Diary routes
router.get("/diaries", diaryController.findAll);
router.get("/diaries/:id", diaryController.findOne);
router.post("/diaries", diaryController.create);
router.put("/diaries/:id", diaryController.update);
router.delete("/diaries/:id", diaryController.delete);
router.delete("/diaries", diaryController.deleteAll);

// Ingredient routes
router.get("/ingredients", ingredientController.findAll);
router.get("/ingredients/:id", ingredientController.findOne);
router.post("/ingredients", ingredientController.create);
router.put("/ingredients/:id", ingredientController.update);
router.delete("/ingredients/:id", ingredientController.delete);
router.delete("/ingredients", ingredientController.deleteAll);

// Recipe routes
router.get("/recipes", recipeController.findAll);
router.get("/recipes/:id", recipeController.findOne);
router.post("/recipes", recipeController.create);
router.put("/recipes/:id", recipeController.update);
router.delete("/recipes/:id", recipeController.delete);
router.delete("/recipes", recipeController.deleteAll);

// User routes
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);
router.delete("/users", userController.deleteAll);

module.exports = router;
