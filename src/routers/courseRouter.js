const { Router } = require("express");
const isValid = require("../Middlewares/isValidObjectId");

const courseController = require("../controllers/courseController");

const courseRouter = Router();

courseRouter.get("/", courseController.getAll);
courseRouter.get("/:id", isValid, courseController.getOne);
courseRouter.post("/", courseController.create);
courseRouter.put("/:id", isValid, courseController.replaceOne);
courseRouter.patch("/:id", isValid, courseController.replaceOne);

courseRouter.delete("/:id", isValid, courseController.deleteOne);

module.exports = courseRouter;
