import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gifUrl: {
      type: String,
      required: true,
      trim: true,
    },
    target: {
      type: String,
      required: true,
      trim: true,
    },
    equipment: {
      type: String,
      required: true,
      trim: true,
    },
    instructions: {
      type: [String],
      default: [],
    },
    secondaryMuscles: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", ExerciseSchema);

export default Exercise;
