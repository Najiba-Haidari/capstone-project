import  { useContext } from 'react';
import { ExerciseContext } from '../ExerciseContext.jsx';
// import axios from 'axios';
// import {useState} from 'react'


export default function Cards({ bpData, setBpData }) {
    const { saveExercise, savedExercises} = useContext(ExerciseContext);
    console.log(savedExercises)
    // const [savedExercises, setSavedExercises] = useState([]);
console.log(bpData)
    // const saveExercise = async (exercise) => {
    //     const exerciseData = {
    //         name: exercise.name,
    //         gifUrl: exercise.gifUrl,
    //         target: exercise.target,
    //         equipment: exercise.equipment,
    //         //   secondaryMuscles: exercise.secondaryMuscles,
    //     };

    //     try {
    //         if (!savedExercises.some(saved => saved.name === exercise.name)) {
    //             await axios.post('http://localhost:3000/api/exercises', exerciseData);
    //             setSavedExercises([...savedExercises, exercise]);
    //             alert('Exercise saved successfully!');
    //         }
    //         else {
    //             alert('Exercise already saved!');
    //         }
    //     } catch (error) {
    //         console.error('Error saving exercise', error);
    //     }
    // };


    return (
        <div className="container-card d-flex flex-row flex-wrap justify-content-center text-start">
            {bpData.map((e) => (
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
                                <button id="save" className="btn btn-primary w-50 p-2" onClick={() => saveExercise(e)}>{savedExercises.find(ex => ex.id === e.id) ? "Saved": "Save"}</button>

                            </div>

                        </div>

                    </div>

                    {/* <a href="#" className="btn btn-primary">Instructions</a> */}
                    {/* </div>
                    </div> */}
                </div>
            ))}
        </div>
    )
}