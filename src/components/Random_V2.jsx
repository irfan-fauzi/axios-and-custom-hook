import React from 'react';
import useGif from '../hooks/useGif';

const Random_V2 = () => {

  const [gif, fetchGif] = useGif();

  const handleClick = () => {
    fetchGif()
   }
  return (
    <div className="container">
     <h1>Random</h1>
     <img src={gif} alt="gif" width="400"/>
     <button onClick={handleClick} >acak</button>
    </div>
  )
}

export default Random_V2
