import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
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
  isSaved: {
    type: Boolean,
    default: false,
  },
  // secondaryMuscles: {
  //   type: [String], // Defines an array of strings
  //   default: [], // Default to an empty array if not provided
  // },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export default Exercise;
