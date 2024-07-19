const mongoose = require("mongoose");

const holeSchema =  mongoose.Schema(
  {
    par: {
      type: Number,
      required: true,
      min: 3,
      max: 5,
    },
    distance: {
      type: Number,
      required: true,
      min: 0,
      max: 999,
    },
  },
  {
    _id: false,
  }
);

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 256,
    },
    holes: {
      type: [holeSchema],
      validate: {
        validator: (holes) => holes.length === 18,
        message: "a golf course must have exactly 18 holes.",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const roundSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 64,
  },
  scores: {
    type: [Number],
    required: true,
    validate: {
      validator: (scores) => scores.length === 18,
      message: "round must have scores for all 18 holes.",
    },
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Round = mongoose.model("Round", roundSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = {
  Round,
  Course,
};
