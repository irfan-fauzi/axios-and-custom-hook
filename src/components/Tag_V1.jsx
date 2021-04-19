import React, {useState, useEffect} from 'react';
import axios from 'axios';

// GET API KEY from .env
const API_KEY = process.env.REACT_APP_API_KEY;

const Tag_V1 = () => {

  const [tag, setTag] = useState('');
  const [gif, setGif] = useState('');

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`;
 
    const {data} = await axios.get(url);
    const imgUrl = data.data.images.downsized.url;
    setGif(imgUrl)
  }
  useEffect(() => {
    fetchGif(tag)
  },[])

  const handleChange = (e) => {
    let val = e.target.value;
    setTag(val);
    fetchGif(val)
  }
  // const handleClick = () => {
  //  setTag()
  // }
  return (
    <div className="container">
     <h1>Random</h1>
     <img src={gif} alt="gif" width="200"/>
     <input type="text" onChange={handleChange} />
     
    </div>
  )
}

export default Tag_V1
