
import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../../../ExerciseContext.jsx';
import axios from 'axios';
import './SavedEx.css';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from '../../ExerciseCard.jsx';

const EXE_URL= import.meta.env.DEV ? 'http://localhost:3000/api/exercises'
: "https://haidari-najiba-exercisexpert-capstone.onrender.com/api/exercises" 

export default function SavedEx({ isLoggedIn, token }) {
    const { savedExercises, setSavedExercises, deleteExercise } = useContext(ExerciseContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/'); // Redirect to home page if not logged in
        }
    }, [isLoggedIn, navigate]);

    const getSavedExercises = async () => {
        try {
            if (token) {
                const response = await axios.get(EXE_URL, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSavedExercises(response.data);
            }
        } catch (error) {
            console.error('Error fetching saved exercises:', error);
        }
    };


    useEffect(() => {
        if (token) {
            getSavedExercises();
        }
    }, [token]);

    return (
        <div className='w-75 mx-auto'>
            <h2 className='p-4 m-4'>List of Saved Exercises</h2>
            <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
                {savedExercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise._id}
                        exercise={exercise}
                        deleteExercise={deleteExercise}
                        token={token}
                        isLoggedIn={isLoggedIn}
                    />
                ))}
            </div>
        </div>
    );
}
