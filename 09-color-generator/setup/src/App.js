import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState("#f15025");
  const [palette, setPalette] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    console.log("submit triggered");
    try {
      let colors = new Values(color).all(10);
      setPalette(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }



  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={(e) => setColor(e.target.value)} 
          className={`${error? "error": null}`} 
          placeholder='#f15025'
        ></input>
        <button 
          className="btn" 
          type="submit">submit</button>
      </form>
    </section>
    <section className='colors'>
    {palette.map((color, index) => {
      return (
        <SingleColor 
          key={index}
          {...color}
          index={index}
        />
      )
    })}

    </section>
  </>
}

export default App
