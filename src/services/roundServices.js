const { Round } = require("../models/rounds");
const { NotFoundError } = require("../utils/error");

const create = async (input) => {
  const newRound = new Round(input);
  await newRound.save();
  return newRound;
};

const getAll = async () => {
  const rounds = await Round.find({}).populate("course");
  return rounds;
};

const getOne = async (id) => {
  const theRound = await Round.findById(id).populate("course");
  if (!theRound) {
    throw new NotFoundError(`round with id ${id} not found`);
  }
  return theRound;
};

// replace one
const replaceOne = async (id, body) => {
 

  const updatedRound = await Round.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
    populate: "course",
  });

  

  if (!updatedRound) {
    throw new NotFoundError(`round with id ${id} not found`);
  }
  console.log(updatedRound);
  return updatedRound;
};

// deleteOne
const deleteOne = async (id) => {
  const deletedRound = await Round.findByIdAndDelete(id).populate("course");
  if (!deletedRound) {
    throw new NotFoundError(`round with id ${id} not found`);
  }
  return deletedRound;
};

module.exports = {
  create,
  getAll,
  getOne,
  replaceOne,
  deleteOne,
};
