import React, { useContext, useEffect } from 'react';
import { ExerciseContext } from '../../../ExerciseContext.jsx'
// import { useEffect } from 'react';
import axios from 'axios';
import './SavedEx.css';

export default function SavedEx() {
//   const [savedExercises, setSavedExercises] = useState([]);
const { savedExercises, setSavedExercises, deleteExercise } = useContext(ExerciseContext);


  const getSavedExercises = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/exercises');
      setSavedExercises(response.data);
    } catch (error) {
      console.error('Error fetching saved exercises', error);
    }
  };

//   const deleteExercise = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/exercises/${id}`);
//       setSavedExercises(savedExercises.filter(exercise => exercise._id !== id));
//     } catch (error) {
//       console.error('Error deleting exercise', error);
//     }
//   };

  useEffect(() => {
    getSavedExercises();
  }, []);

  return (
    // <div>
    //   <h1>Saved Exercises</h1>
    //   <div className='saved-card-container'>
    //     {savedExercises.map(exercise => (
    //       <div className='card' key={exercise._id}>
    //         <img src={exercise.gifUrl} alt={exercise.name} />
    //         <h3>{exercise.name}</h3>
    //         <p>Target: {exercise.target}</p>
    //         <p>Equipment: {exercise.equipment}</p>
    //         {/* <p>Secondary Muscles: {exercise.secondaryMuscles.join(', ')}</p> */}
    //         <button onClick={() => deleteExercise(exercise._id)}>Delete</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    //
    <div className='w-75 mx-auto'>
    <h2 className='p-4 m-4'>List of Saved Exercises</h2>
    <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
    {savedExercises.map((e) => (
        <div className="card-box col-12 col-sm-12 col-md-12 col-lg-6 mb-3 p-2" key={e.id}>
            <div className="card mb-1 shadow " key={e.id} >
                <div className="row">
                    <div className="col-md-6">
                        <img src={e.gifUrl} className="img-fluid rounded-start" alt={e.name} />
                    </div>
                    <div className="col-md-6 bg-light">
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">Target: {e.target}</p>
                            <p className="card-text">Equipment: {e.equipment}</p>
                            {/* <ul className="card-text">Secondary Muscles: {e.secondaryMuscles.map((m, i) => (
                                <li key={m}>{m}</li>
                            ))}</ul> */}
                            {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                        <button id="save" className="btn btn-danger  p-2" onClick={() => deleteExercise(e._id)}>Delete</button>

                    </div>

                </div>

            </div>

            {/* <a href="#" className="btn btn-primary">Instructions</a> */}
            {/* </div>
            </div> */}
        </div>
    ))}
</div>
</div>
  );
}
