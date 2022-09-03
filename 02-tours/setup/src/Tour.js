import React, { useState } from 'react';

const Tour = ({image, name, info, price, id, onDelete}) => {

  const [isDetails, setIsDetails] = useState(false);
  // const {image, name, info, price, id} = props.tour;
  const truncate = (str) => {
    return str.substring(0,100)+"...";
  }

  return (
    <>
      <article className='single-tour'>
          <img src={image} alt={name} />
          <footer>
            <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>${price}</h4>
            </div>
            <p>{(isDetails) ? info : truncate(info)}<button onClick={() => setIsDetails(!isDetails)}>{(isDetails) ? "Show less" : "Read more"} </button></p>
            
            <button className='delete-btn' onClick={() => onDelete(id)}>Not Interested</button>
            </footer>
        </article>
    </>
  )
};

export default Tour;
