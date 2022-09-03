import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    let myInterval = setInterval(() => increase(), 3000);
    return (
      () => clearInterval(myInterval)
    )
  }, [current])

  function getClass(num) {
    let last;
    if (current === 1) {
      last = data.length;
    } else {
      last = current-1;
    }
    if (num === current) {
      return "activeSlide"
    } else if (num === last) {
      return "lastSlide"
    } else {
      return "nextSlide"
    }

  }

  const increase = () => {
    if (current === data.length) {
      setCurrent(1);
    } else {
      setCurrent(current+1);
    }
  }

  const decrease = () => {
    if (current === 1) {
      setCurrent(data.length);
    } else {
      setCurrent(current-1);
    }
  }


  return <>
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {data.map((item) => {
          return (
            <article className={getClass(item.id)}>
              <img className='person-img' src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className='title'>{item.title}</p>
              <p className='text'>{item.quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          )
        })}
        <button className='prev' onClick={() => decrease()}><FiChevronLeft /></button>
        <button className='next'onClick={() => increase()}><FiChevronRight /></button>
      </div>
      
      
    </section>
  </>;
}

export default App;
