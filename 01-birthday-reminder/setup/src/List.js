import React from 'react';

const List = ({age, name, id, image}) => {
  return (
    <>
      <div className='person'>
        <img src={image} />
        <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        </div>
        
      </div>
    </>
  );
};

export default List;
