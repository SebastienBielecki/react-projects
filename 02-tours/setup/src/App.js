import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [initialTours, setInitialTours] = useState([]);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState("true");

  const getTours = async () => {

    try {
      const res = await fetch(url);
      const myTours = await res.json();
      setInitialTours(myTours);
      setTours(myTours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  const deleteTour = (id) => {
    const newTours = tours.filter((item) => {
      return item.id !== id;
    })
    setTours(newTours);
  }
  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return <>
    <main>
    <Tours 
      tours={tours}
      onDelete={deleteTour}
    />
    {(tours.length === 0) && <button className='btn' onClick={() => getTours()}>Refresh</button>}
    </main>
    
  </>
}

export default App
