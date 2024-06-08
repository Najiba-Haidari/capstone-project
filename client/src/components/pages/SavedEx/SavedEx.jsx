
import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../../../ExerciseContext.jsx';
import axios from 'axios';
import './SavedEx.css';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from '../../ExerciseCard.jsx';

export default function SavedEx({ isLoggedIn }) {
    const { savedExercises, setSavedExercises, deleteExercise } = useContext(ExerciseContext);
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!isLoggedIn) {
          // Redirect to home page if not logged in
            navigate('/'); 
        }
    }, [isLoggedIn, navigate]);

    const getSavedExercises = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/exercises');
            setSavedExercises(response.data);
        } catch (error) {
            console.error('Error fetching saved exercises', error);
        }
    };

    useEffect(() => {
        getSavedExercises();
    }, []);

    return (
        <div className='w-75 mx-auto'>
            <h2 className='p-4 m-4'>List of Saved Exercises</h2>
            <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
                {savedExercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        deleteExercise={deleteExercise}
                    />
                ))}
            </div>
        </div>
    );
}
