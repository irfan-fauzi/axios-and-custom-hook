import React, {useState} from 'react';
import useGif from '../hooks/useGif';

const Tag_V2 = () => {


  const [tag, setTag] = useState('dog');
  const [gif, fetchGif] = useGif(tag);

  const handleClick = () => {
    fetchGif(tag)
   }
   return (
     <div className="container">
      <h1>Random {tag}</h1>
      <img src={gif} alt="gif" width="200" />
      <input type="text" onChange={(e) => setTag(e.target.value)} value={tag}/>
      <button onClick={handleClick}>click</button>
     </div>
   )
}

export default Tag_V2
