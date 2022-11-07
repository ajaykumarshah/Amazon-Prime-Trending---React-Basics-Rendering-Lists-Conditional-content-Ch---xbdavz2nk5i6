import React, { Component, useState } from "react";
import '../styles/App.css';
import Data from '../data';

const App = ({ slides }) => {
  // console.log(slides);



  let updated = slides.map((element, index) => {
    return <div className="container" key={element.title + index}>
      <h1 > {element.title}</h1> <br />
      <p> {element.text}</p>

    </div>
  })

  // for iterating in updated
  const [index, setIndex] = useState(0);



  let indexcondition = index === 0;
  // console.log(indexcondition);

  // const [images, setImages] = useState(slides[slides]);
  const goprev = (event) => {
    index == 0 ? event.target.disable : "";
    setIndex(() => index - 1);
  }

  const gonext = () => {

    // console.log(index);
    setIndex(() => index + 1);
  }

  const restart1 = () => {

    setIndex(() => 0);
  }
  return (
    <>
      <button onClick={goprev} data-testid="button-prev" disabled={indexcondition}  >Prev</button>
      {updated[index]}
      <button onClick={gonext} data-testid="button-next" disabled={index == slides.length - 1}>Next</button>
      <button onClick={restart1} data-testid="button-restart"> restart</button>
    </>
  )
}


export default App;
