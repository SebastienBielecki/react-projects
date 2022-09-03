
import React from 'react';
import Tour from './Tour';
const Tours = ({tours, onDelete}) => {

  return <>
        <section>
          <div className='title'>
            <h2>Our tours</h2>
            <div className='underline'></div>
          </div>
          <div>
            {tours.map((tour) => {
              return (<Tour
                key={tour.id}
                {...tour}
                onDelete = {onDelete}
              />)
              })}
          </div>
        </section>
  </>;
};

export default Tours;
