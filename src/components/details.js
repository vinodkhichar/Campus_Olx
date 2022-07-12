import React from "react";
import { Link, useParams } from "react-router-dom";
import AppHeader from "./App_Header";
import Footer from "./Footer";

import './details.css';

function Detail(){
    const { id,brand,title,description,price,category} = useParams();
    return(
        <div className="item_complete_desc">
            <div class="container_p" style={{width:'100%'}}>
                
        {/* <!-- Left Column / Headphones Image --> */}
        <div class="left-column">
          <img
            data-image="img1"
            src={`https://robohash.org/${id}`}
            alt="Couldn't load image"
          />
          <img
            data-image="img2"
            src={`https://robohash.org/${id}`}
            alt="Couldn't load image"
          />
          <img
            data-image="img3"
            class="active"
            src={`https://robohash.org/${id}`}
            alt="Couldn't load image"
          />
        </div>
  
        {/* <!-- Right Column --> */}
        <div class="right-column">
          {/* <!-- Product Description --> */}
          <div class="product-description">
            <span>{category}</span>
            <h1>{title}</h1>
            <p>
             {description}
            </p>
          </div>
           {/*  Product Configuration */}
          <div class="product-configuration">
            {/* Product Images */}
            <div class="product-img">
              <span>Photos</span>
  
              <div class="img-choose">
                <div>
                  <input
                    data-image="img3"
                    type="radio"
                    id="img3"
                    name="color"
                    value="img3"
                    checked
                  />
                  <label for="img3"><span></span></label>
                </div>
                <div>
                  <input
                    data-image="img2"
                    type="radio"
                    id="img2"
                    name="color"
                    value="img2"
                  />
                  <label for="img2"><span></span></label>
                </div>
                <div>
                  <input
                    data-image="img1"
                    type="radio"
                    id="img1"
                    name="color"
                    value="img1"
                  />
                  <label for="img1"><span></span></label>
                </div>
              </div>
            </div>
          </div>
         {/* Product Pricing  */}
          <div class="product-price">
            <span>Price:{price}</span>
            <Link to='chat' class="cart-btn">Chat with seller</Link>
          </div>
        </div>
      </div>
        </div>
  
    )
}

export default Detail;
