import React from 'react';
import CustomerReviews from '../../Hooks/CustomerReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = CustomerReviews();
    return (
        < div className = "review-section" > 
        <div div className = "client-reviews" >
          
            {
           reviews.map(review => < Review
                key={review.id}
               review={review}
           ></Review>)
      }  
            </div>
            </div>
    );
};

export default Reviews;