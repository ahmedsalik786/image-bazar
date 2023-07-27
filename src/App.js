import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import ImageList from './components/ImageList';

function App() {
  let [info, setInfo] = useState([]);

  return (
    <div className="App">
      <Search setInfo={setInfo} />
      <div id="list">
        <ImageList info={info} />
      </div>
    </div>
  );
}



export default App;
