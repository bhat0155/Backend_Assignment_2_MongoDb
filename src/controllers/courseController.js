const { Course } = require("../models/rounds");
const { NotFoundError } = require("../utils/error");
const { BadRequestError } = require("../utils/error");

const courseServices = require("../services/courseServices");

// post
const create = async (req, res, next) => {
  try {
  
    const newCourse = await courseServices.create(req.body);
    res.status(201).json({
      data: newCourse,
    });
  } catch (err) {
    next(err);
  }
};

// getAll
const getAll = async (_req, res, next) => {
  try {
    const courses = await courseServices.getAll();
    res.json({ data: courses });
  } catch (err) {
    next(err);
  }
};

// getOne
const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const theCourse = await courseServices.getOne(id);
    res.status(200).json({ data: theCourse });
  } catch (err) {
    next(err);
  }
};

// replaceOne
const replaceOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    if (Object.keys(body).length === 0) {
      throw new BadRequestError("Request body cannot be empty for replacement.");
    }



    const updatedCourse = await courseServices.replaceOne(id, body);
    res.status(200).json({ data: updatedCourse });
  } catch (err) {
    next(err);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCourse = await courseServices.deleteOne(id);

    res.status(200).json({ data: deletedCourse });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  replaceOne,
  deleteOne,
};
