import { createContext, useState } from 'react';
import axios from 'axios'

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
export const ExerciseProvider = ({ children }) => {
  const [savedExercises, setSavedExercises] = useState([]);
  // const [text, setText] = useState("Save");

  const saveExercise = async (exercise) => {
    const exerciseData = {
      name: exercise.name,
      gifUrl: exercise.gifUrl,
      target: exercise.target,
      equipment: exercise.equipment,
      //   secondaryMuscles: exercise.secondaryMuscles,
    };
    try {
      if (!savedExercises.find(saved => saved.name === exercise.name)) {
        await axios.post('http://localhost:3000/api/exercises', exerciseData);
        setSavedExercises([...savedExercises, exercise]);
        // setText(txt => ({...txt, [exercise.id]: "Saved"}))
        alert('Exercise saved successfully!');
      }
      else {
        alert('Exercise already saved!');
      }
    } catch (error) {
      console.error('Error saving exercise', error);
    }
  };


  const deleteExercise = async (exerciseId) => {
    try {
      await axios.delete(`http://localhost:3000/api/exercises/${exerciseId}`);
      setSavedExercises(savedExercises.filter((exercise) => exercise._id !== exerciseId));
      // setText((text) => ({ ...text, [exerciseId]: "Save" }));
    } catch (error) {
      console.error('Error deleting exercise', error);
    }
  };



  return (
    <ExerciseContext.Provider value={{ savedExercises, setSavedExercises, saveExercise, deleteExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
};