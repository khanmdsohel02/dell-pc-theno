import React from 'react';
import "./home.css"
import bg1 from "../../img/bg1.png"
import {
    Link
} from 'react-router-dom';


const Home = () => {
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
        < div className='title' > < h1 > Customer Reviews </h1></ div>
        < div className = "client-reviews">

        </div>
                 
     </div>
            < p >
                <button>
                    < Link className = 'text-decoration-none text-white hover-color-black'
                    to = "/reviews" > See More Reviews </Link>
                </button>
           </p>
 </div>
    
    );
};

export default Home;