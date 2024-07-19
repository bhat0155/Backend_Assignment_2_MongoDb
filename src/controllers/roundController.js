const { Round } = require("../models/rounds");
const roundServices = require("../services/roundServices");
const { BadRequestError } = require("../utils/error");


// create
const create = async (req, res, next) => {
  try {
    const newRound = await roundServices.create(req.body);
    res.status(201).json({
      data: newRound,
    });
  } catch (err) {
    next(err);
  }
};

// getall
const getAll = async (_req, res, next) => {
  const rounds = await roundServices.getAll();
  res.json({ data: rounds });
};

// getOne
const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const theRound = await roundServices.getOne(id);
    res.json({ data: theRound });
  } catch (err) {
    next(err);
  }
};

// replace
// replaceOne
const replaceOne = async (req, res, next) => {
  try {
    console.log("ekam in round controller replace one");
    const { id } = req.params;
    const body = req.body;

    if (Object.keys(body).length === 0) {
      throw new BadRequestError("Request body cannot be empty for replacement.");
    }

    const updatedRound = await roundServices.replaceOne(id, body);
    res.json({ data: updatedRound });
  } catch (err) {
    next(err);
  }
};

// delete
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRound = await roundServices.deleteOne(id);

    res.json({ data: deletedRound });
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
