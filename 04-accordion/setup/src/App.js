import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <>
    <main>
        <div className='container'>
          <h3>Questions and Answers About Login</h3>
          <section className='info'>
          {data.map((question) => {
            return (
              <SingleQuestion 
                {...question}
                key={question.id}
              />
            )
          })}
          </section>
        </div>
      
    </main>
  </>
}

export default App;
