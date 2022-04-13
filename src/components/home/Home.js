import React from 'react';
import "./home.css"
import bg1 from "../../img/bg1.png"
import {
    Link
} from 'react-router-dom';
import CustomerReviews from '../../Hooks/CustomerReviews';
import Review from '../Review/Review';

const Home = () => {
  const [reviews, setReviews] = CustomerReviews();

    return (
  < div >
    <div className='header-section'>
        <div className="intro">
                < h1 > YOUR NEXT PC <br /> <span span > MUST BE DELL PC </span> </h1 >
                <p p > Dell Inc., formerly PC 's Limited (1984–88) and Dell Computer Corporation (1988–2003), global company that designs, develops, and manufactures personal computers (PCs) and a variety of computer-related products. The company is one of the world'
                s leading suppliers of PCs.Dell is headquartered in Round Rock, Texas.
                </p>
                < button > Purchase Now 
                 <a href = "#" > </a></button >
        </div>
        <div className="bg-img">
                <img src={bg1} alt="" />
        </div>
    </div>
     <div className="review-section">
       < h1 className = 'title' > Customer Reviews </h1>
        < div className = "client-reviews">
      {
              reviews.slice(0, 3).map(review => <Review  
                            key={review.id}
                      review={review}>
                      </Review>)
     }           
      </div> 
            < p >
                <button>
                    < Link className = 'text-decoration-none text-white'
                    to = "/reviews" > See More Reviews </Link>
                </button>
           </p>
    </div>
 </div>
    
    );
};

export default Home;