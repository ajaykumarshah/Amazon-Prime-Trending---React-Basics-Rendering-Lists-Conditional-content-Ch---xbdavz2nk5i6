import React, { Component, useState } from "react";
import '../styles/App.css';
import Data from '../data';

const App = (props) => {
  // console.log(slides);

  const [slides, setSlides] = useState(props.slides);

  const [index, setIndex] = useState(0);

  return (

    <div id='main'>

      <div className="nav">

        <button data-testid="button-restart" disabled={index === 0} onClick={() => (setIndex(0))}>Restart</button>

        <button data-testid="button-prev" disabled={index === 0} onClick={() => (setIndex(index - 1))}>Prev</button>

        <button data-testid="button-next" disabled={index === props.slides.length - 1} onClick={() => (setIndex(index + 1))}>Next</button>

      </div>

      <div className='slide'>

        <h1 data-testid="title">{slides[index].title}</h1>

        <p data-testid="text">{slides[index].text}</p>

      </div>

    </div>

  );

}


export default App;
