import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Tour from './Tour';

// const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getInfo();
  }, []);

  // fetch(url)
  // .then((resp) => resp.json())
  // .then((data) => {
  //     setTours();
  //     setIsLoading(false);
  // }
  // )
  // .catch((err) => console.log(err)



  const getInfo = async () => {
    await axios
      .get('https://course-api.com/react-tours-project')
      .then(res => {
        // console.log(res.data);
        setToursData(res.data);
        setIsLoading(false);
      }
      )
      .catch((err) => {
        setIsError(true);
        console.error(err);
      });

  };


  const removeTour = (id) => {
    const prevTours = toursData;
    const newTours = prevTours.filter((tour) => tour.id !== id);
    setToursData(newTours);

  };

  const listTours = toursData.map((tour) => (
    <Tour
      key={tour.id}
      name={tour.name}
      id={tour.id}
      info={tour.info}
      imageUrl={tour.image}
      price={tour.price}
      removeTour={removeTour}
    />
  ));

  return (
    <section>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="title ">
          {toursData.length === 0 ?
            <div>
              <h1>No more Tours Remaining</h1>
              <button className="refresh-btn"
                onClick={() => getInfo()}>Refresh</button>
            </div>
            : <div><h1>Our Tours</h1>
              <div className="underline"></div></div>}

        </div>
      )
      }
      <main>{listTours}</main>

    </section >
  );
};
export default Tours;
