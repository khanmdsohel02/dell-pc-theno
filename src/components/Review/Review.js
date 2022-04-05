import React from 'react';
import './review.css'

const Review = ({ review }) => {
    const {user, img, comment, ratting, date, id} = review
    return (
       
        <div className='single-review'>
            <img src={img} alt="" />
            < p className = 'user' > < strong > User : </strong>{user}</p >
            <p className='review-com'>{comment}</p>
           <strong>Rating : {ratting}</strong>
          < strong > {
              date
          } </strong>
        </div>
    );
};

export default Review;