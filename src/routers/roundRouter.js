const { Router } = require("express");
const roundController = require("../controllers/roundController");
const isValid = require("../Middlewares/isValidObjectId");

const roundRouter = Router();

roundRouter.get("/", roundController.getAll);
roundRouter.get("/:id", isValid, roundController.getOne);
roundRouter.post("/", roundController.create);
roundRouter.put("/:id", isValid, roundController.replaceOne);
roundRouter.patch("/:id", isValid, roundController.replaceOne);
roundRouter.delete("/:id", isValid, roundController.deleteOne);

module.exports = roundRouter;
