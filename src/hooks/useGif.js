import {useState, useEffect} from 'react';
import axios from 'axios';

// GET API KEY from .env
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
const useGif = (tag) => {

  const [gif, setGif] = useState('');

  const fetchGif = async (tag) => {
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}&rating=g` : url);
    const imgUrl = data.data.images.downsized.url;
    setGif(imgUrl)
  }
  useEffect(() => {
    fetchGif(tag)
  },[tag])

  return [gif, fetchGif];
}

export default useGif;