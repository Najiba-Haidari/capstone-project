import { useParams } from 'react-router-dom';

export default function Instructions() {
  const {name}= useParams();
//   const name = params.name

  return (
    <div>
      <h1>Instructions for {name}</h1>
      {/* Add detailed instructions content here */}
    </div>
  );
}