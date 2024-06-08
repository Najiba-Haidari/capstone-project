
import { useContext } from 'react';
import { ExerciseContext } from '../ExerciseContext.jsx';
import ExerciseCard from './ExerciseCard.jsx';

export default function Cards({ bpData }) {
    const { saveExercise, savedExercises } = useContext(ExerciseContext);

    return (
        <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
            {bpData.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    saveExercise={saveExercise}
                    savedExercises={savedExercises}
                />
            ))}
        </div>
    );
}
