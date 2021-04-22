import React, {useState, useEffect} from 'react';
import axios from 'axios';

// GET API KEY from .env
const API_KEY = process.env.REACT_APP_API_KEY;

const Random_V1 = () => {
  
  const [gif, setGif] = useState('');
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
    const {data} = await axios.get(url);
    const imgUrl = data.data.images.downsized.url;
    setGif(imgUrl)
  }
  useEffect(() => {
    fetchGif()
  },[])

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

export default Random_V1
