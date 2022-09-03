import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [paragraphs, setParagraphs] = useState(0);
  const [lorems, setLorems] = useState([]);

  const handleChange = (e) => {
    const num = e.target.value
    setParagraphs(Number(num));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let num;
    console.log(typeof(paragraphs));
    if ( paragraphs <= 0) {
      num = 1;
    } else if (paragraphs > data.length) {
      num = data.length -1
    } else {
      num=paragraphs;
    }
    const newLorem = data.slice(0, num);
    console.log(newLorem);
    setLorems(newLorem);
  }
  
  return (
  <>
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
    
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs :</label>
      <input onChange={handleChange} type="number" name="amount" id="amount" value={paragraphs}></input>
      <button type="submit" className='btn'>generate</button>
    </form>
    
    {lorems && <article className='lorem-text'>
      {lorems.map((lorem, index) => {
        return <p key={index}>{lorem}</p>
      })}

    </article>}
    </section>
  </>
    )
}

export default App;
