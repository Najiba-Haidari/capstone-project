import { useState } from 'react';

export default function ExerciseCard({ exercise, saveExercise, savedExercises, deleteExercise,  token, isLoggedIn  }) {
    const handleSave = () => {
        if (isLoggedIn) {
          saveExercise(exercise, token);
        } else {
          alert('Please log in to save exercises.');
        }
      };
    
      const handleDelete = () => {
        if (isLoggedIn) {
            deleteExercise(exercise._id, token);
          } else {
            alert('Please log in to delete exercises.');
          }
      };
    
    
    const [activeInstructionIndex, setActiveInstructionIndex] = useState(null);
    const [activeSecondaryMusclesIndex, setActiveSecondaryMusclesIndex] = useState(null);

    const toggleInstructionAccordion = (index) => {
        setActiveInstructionIndex(activeInstructionIndex === index ? null : index);
    };

    const toggleSecondaryMusclesAccordion = (index) => {
        setActiveSecondaryMusclesIndex(activeSecondaryMusclesIndex === index ? null : index);
    };

    return (
        <div className="card-box col-12 col-sm-12 col-md-12 col-lg-6 mb-3 p-2" key={exercise.id}>
            <div className="card mb-1 shadow" key={exercise.id}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={exercise.gifUrl} className="img-fluid rounded-start" alt={exercise.name} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{exercise.name}</h5>
                            <p className="card-text">Target: {exercise.target}</p>
                            <p className="card-text">Equipment: {exercise.equipment}</p>
                        </div>
                    </div>
                    <div id="accordion">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                    onClick={() => toggleInstructionAccordion(exercise.id)}>
                                    Instructions
                                </button>
                            </h5>
                        </div>
                        <div className={`collapse ${activeInstructionIndex === exercise.id ? 'show' : ''}`} id={`collapse-instruction-${exercise.id}`}>
                            <div className="card-body">
                                <ol className="card-text">
                                    {exercise.instructions.map((instruction) => (
                                        <li key={instruction}>{instruction}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                    onClick={() => toggleSecondaryMusclesAccordion(exercise.id)}>
                                    Secondary Muscles
                                </button>
                            </h5>
                        </div>
                        <div className={`collapse ${activeSecondaryMusclesIndex === exercise.id ? 'show' : ''}`} id={`collapse-secondary-muscles-${exercise.id}`}>
                            <div className="card-body">
                                <ol className="card-text">
                                    {exercise.secondaryMuscles.map((muscle) => (
                                        <li key={muscle}>{muscle}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                    {saveExercise && (
                        <button id="save" className="btn btn-primary w-50 p-2 mx-auto my-3" onClick={handleSave} >
                            {savedExercises.find(ex => ex.name === exercise.name) ? "Saved" : "Save"}
                        </button>
                    )}
                    {deleteExercise && (
                        <button id="save" className="btn btn-danger p-2 mx-auto my-3" onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
