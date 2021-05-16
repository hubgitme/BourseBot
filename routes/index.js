const { Router } = require("express");

const router = new Router();

const indexController = require("../controllers/indexController");

//^  @desc   Index Page
//*  @route  GET /
router.get("/:userId", indexController.index);

//^  @desc   Buy Rite
//*  @route  POST /buy
router.post("/buy/:code", indexController.buyRite);

module.exports = router;