const { Course } = require("../models/rounds");
const { NotFoundError } = require("../utils/error");

const create = async (input) => {
  const newCourse = new Course(input);

  await newCourse.save();
  return newCourse;
};

const getAll = async () => {
  const courses = await Course.find({});
  return courses;
};

const getOne = async (id) => {
  const theCourse = await Course.findById(id);
  if (!theCourse) {
    throw new NotFoundError(`course with id ${id} not found`);
  }
  return theCourse;
};

// replace one
const replaceOne = async (id, body) => {
  const updatedCourse = await Course.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!updatedCourse) {
    throw new NotFoundError(`course with id ${id} not found`);
  }
  return updatedCourse;
};

// deleteOne
const deleteOne = async (id) => {
  const deletedCourse = await Course.findByIdAndDelete(id);
  if (!deletedCourse) {
    throw new NotFoundError(`course with id ${id} not found`);
  }
  return deletedCourse;
};

module.exports = {
  create,
  getAll,
  getOne,
  replaceOne,
  deleteOne,
};
