import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Search.css';
import Card from '../../Card.jsx';
import {Text } from '@chakra-ui/react'

export default function Search(props) {
  const [selectedBp, setSelectedBp] = useState("");
  const [bpData, setBpData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate('/'); 
    }
  }, [props.isLoggedIn, navigate]);

  const handleChange = (e) => {
    setIsSubmitted(false);
    setSelectedBp(e.target.value);
  };

  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBp}?limit=15`;
  const API_KEY = "cee23baa0amshab7b2d353f6de30p134a0ajsnc54ace73156b";
  
  const getBpData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setBpData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedBp && isSubmitted) {
      getBpData();
    }
  }, [selectedBp, isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBp) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="">
      {/* <h1 className='m-5 heading '>Choose your <span id='title'>Exercise</span></h1> */}
      <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Choose Your Exercise
</Text>
      <form className="form my-3 py-5" onSubmit={handleSubmit}>
        <select placeholder='Select option' className="w-50 p-2 m-2" onChange={handleChange}>
          {props.bodyParts.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <input className="btn-submit " value="Search" type="submit" />
      </form>
      <div className='container p-0 '>
        {isSubmitted && bpData ? (
          bpData.length > 0 ? (
            <Card bpData={bpData} setBpData={setBpData} />
          ) : (
            <h2>Loading Exercises for {selectedBp}</h2>
          )
        ) : (
          <h3>Please select a body part and click Search</h3>
        )}
      </div>
    </div>
  );
}
