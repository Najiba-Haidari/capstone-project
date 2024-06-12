import { createContext, useState } from 'react';
import axios from 'axios'

// Create the context
export const ExerciseContext = createContext();

const EXE_URL= import.meta.env.DEV ? 'http://localhost:3000/api/exercises'
: "https://haidari-najiba-exercisexpert-capstone.onrender.com/api/exercises" 
// Create the provider component
export const ExerciseProvider = ({ children }) => {
  const [savedExercises, setSavedExercises] = useState([]);
  // const [text, setText] = useState("Save");

  const saveExercise = async (exercise, token) => {
    const exerciseData = {
        userId: exercise.userId,
        name: exercise.name,
        gifUrl: exercise.gifUrl,
        target: exercise.target,
        equipment: exercise.equipment,
        instructions: exercise.instructions,
        secondaryMuscles: exercise.secondaryMuscles,
    };
    try {
        if (!savedExercises.find(saved => saved.name === exercise.name)) {
            await axios.post(EXE_URL, exerciseData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSavedExercises([...savedExercises, exercise]);
            alert('Exercise saved successfully!');
        } else {
            alert('Exercise already saved!');
        }
    } catch (error) {
        console.error('Error saving exercise:', error);
    }
};



  const deleteExercise = async (exerciseId, token) => {
    try {
      await axios.delete(`${EXE_URL}/${exerciseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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