import React, { useEffect, useState } from 'react';
import Child
 from './components/Child';
function App() {
  const [message, setMessage] = useState('');
  const [clicks, setClicks] = useState(0);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000/');
    const data = await response.json();
    setMessage(data.message);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="App">
      <h1> 
        {<Child clicks={clicks} updateClick={handleClick} />}
        {message}
        </h1>
    </div>
  );
}

export default App;