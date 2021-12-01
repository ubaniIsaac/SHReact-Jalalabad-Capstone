import axios from 'axios';
import React, { useState, useEffect } from 'react'


// const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [toursData, setToursData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getInfo();
    }, [])

    // fetch(url)
    // .then((resp) => resp.json())
    // .then((data) => {
    //     setTours();
    //     setIsLoading(false);
    // }
    // )
    // .catch((err) => console.log(err)

    const getInfo = async () => {
        await axios.get('https://course-api.com/react-tours-project')
            .then(res => {
                console.log(res.data);
                setToursData(res.data);
                setIsLoading(false);
            });
    }

    const listTours = toursData.map((tours) =>

        <div className="section">

            <div className="single-tour">
                <img

                    src={tours.image}
                />
                <h2>{tours.name}</h2>
                <h3 className="tour-price">{tours.price}</h3>
                <p className="tour-info">{tours.info}</p>

                <button
                    className="delete-btn">Not Interested</button>
            </div>
        </div >

    )


    return (
        <div>
            {isLoading &&
                <h1 className="loading" >Loading...</h1>
            }
            <h1 className="title">Our Tours</h1>

            {listTours}
        </div>
    )
}
export default Tours
