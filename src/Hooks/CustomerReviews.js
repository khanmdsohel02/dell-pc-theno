import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
        console.log(reviews);
    }, []);
    return [reviews, setReviews];
};

export default CustomerReviews;