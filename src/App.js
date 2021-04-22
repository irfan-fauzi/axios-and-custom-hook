import './index.css';
import Random from './components/Random_V2';
import Tag from './components/Tag_V2';

function App() {
  return (
    <div>
     <h1>hello world</h1>
     <div className="main-container">
        <Random />
        <Tag />
     </div>
    </div>
  );
}

export default App;
