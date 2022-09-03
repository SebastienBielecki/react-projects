import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaApple } from 'react-icons/fa';



const Review = () => {
  const [reviewId, setReviewId] = useState(0);
  const {id, name, job, image, text } = people[reviewId];

  const nextReview = () => {
    console.log("next review triggered");
    setReviewId(((reviewId + 1) % people.length));
  }

  const prevReview = () => {
    console.log("next review triggered");
    if (reviewId === 0) {
      console.log("review id = 0");
      setReviewId(people.length -1);
    } else {
      setReviewId(((reviewId -1) % people.length));
    }
  }

  const randomReview = () => {
    const randomNumber = Math.floor(Math.random()*people.length);
    setReviewId(randomNumber);
  }

  return <>
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevReview()}><FaChevronLeft /></button>
        <button className='next-btn' onClick={() => nextReview()}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={() => randomReview()}>Surprise Me</button>
    
    </article>
  </>
};

export default Review;
