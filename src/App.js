import './App.css';
import mainImg from './images/drawers.jpg'
import BeforeShare from './Components/BeforeShare';
import AfterShare from './Components/AfterShare';
import { useState } from 'react';



function App() {

  const [share, setShare] = useState(false);

  return (
    <>
      <div className='container'>
        <div className='row mainimg'>
          <img src={mainImg} id='mainimg'></img>
        </div>
        <div>
        <div className='row maintext'>
          <h1 className='h1-maintext'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className='p-maintext'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel <br/> complete.</p>
        </div>
        <div className='row footer'>
          {share === false ? <BeforeShare setShare={setShare}></BeforeShare> : <AfterShare setShare={setShare}></AfterShare>}
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
