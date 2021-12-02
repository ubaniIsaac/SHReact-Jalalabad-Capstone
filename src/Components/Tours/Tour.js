import React, { useState } from 'react';

const Tour = ({ id, name, info, imageUrl, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="single-tour">
      <img alt={name} src={imageUrl} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <div style={{ padding: '0 1rem' }}>
        <p>
          {showMore ? info : info.slice(0, 200)}
          <span>
            {!showMore && ' ...'}
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less ' : 'show more'}
            </button>
          </span>
        </p>
      </div>

      <button className="delete-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
