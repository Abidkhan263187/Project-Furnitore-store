import React, { useState } from 'react';
import './ItemDescription.css';
import Footer from '../Home/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { SlideCard } from '../Home/SlideCard';
import Slider from '../Home/Slider';

const ItemDescription = () => {
    const [selectedImage, setSelectedImage] = useState("https://cdn.shopify.com/s/files/1/2660/5236/products/u8hyt7cfzyeounachrdt_9544c341-e0cd-4dcb-b897-efbcff5f468b_medium.jpg?v=1675965151");
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    // need to call api based on api 

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <><div className="desc-container" >


            <div className="thumbnails " style={{}}>
                <div className="thumbnail" onClick={() => handleThumbnailClick("https://cdn.shopify.com/s/files/1/2660/5236/products/mlhbiqu7hkv5mvxcb36o_3b67facb-8d5f-4b97-baf3-87a6da549fc1_medium.jpg?v=1675965153")}>
                    <img src="https://cdn.shopify.com/s/files/1/2660/5236/products/mlhbiqu7hkv5mvxcb36o_3b67facb-8d5f-4b97-baf3-87a6da549fc1_medium.jpg?v=1675965153" alt="Thumbnail 1" />
                </div>
                <div className="thumbnail" onClick={() => handleThumbnailClick("https://cdn.shopify.com/s/files/1/2660/5236/products/pnxcrulpyoxzdcuigqq5_b633b015-8ea9-44bf-8df4-6a3e60da1ac5_medium.jpg?v=1675965153")}>
                    <img src="https://cdn.shopify.com/s/files/1/2660/5236/products/pnxcrulpyoxzdcuigqq5_b633b015-8ea9-44bf-8df4-6a3e60da1ac5_medium.jpg?v=1675965153" alt="Thumbnail 2" />
                </div>
                <div className="thumbnail" onClick={() => handleThumbnailClick("https://cdn.shopify.com/s/files/1/2660/5236/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_medium.jpg?v=1681837487")}>
                    <img src="https://cdn.shopify.com/s/files/1/2660/5236/products/shopify-image_a6fa3eb1-c388-4ce9-a914-c9ea3e4384cf_medium.jpg?v=1681837487" alt="Thumbnail 3" />
                </div>
                <div className="thumbnail" onClick={() => handleThumbnailClick("https://cdn.shopify.com/s/files/1/2660/5236/products/u8hyt7cfzyeounachrdt_9544c341-e0cd-4dcb-b897-efbcff5f468b_medium.jpg?v=1675965151")}>
                    <img src="https://cdn.shopify.com/s/files/1/2660/5236/products/u8hyt7cfzyeounachrdt_9544c341-e0cd-4dcb-b897-efbcff5f468b_medium.jpg?v=1675965151" alt="Thumbnail 4" />
                </div>
            </div>


            {/* 2nd  */}
            <div className="desc-image">
                <img src={selectedImage} style={{ margin: " 15% auto" }} alt="Furniture" />
            </div>
            <div className="details-details" style={{}}>
                <h2 className="details-name" style={{}}>Modern Sofa</h2>
                <p className="details-price">$499</p>
                <s className="details-mrpprice">$499</s>
                
                <div className='details-dimension'>
                    <h4>Dimensions </h4>
                    <p>Height <span>----------</span></p>
                    <p>Width <span>-----------</span></p>
                </div>
                
                <div className='details-discount'>
                    Discount: <span className='details-disc'>40%</span>
                </div>
                <div className="details-rating" style={{}}>
                    <span className="details-rating-label">Rating:</span>
                    <span className="details-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                </div>
                <p className="details-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque.
                </p>
                <div className='details-buy-btn-div'>
                    <Link><button className="details-buy-now">Add to Cart</button>
                    </Link>

                    <Link>
                        <button className="details-add-now"><i class="fa-solid fa-heart fa-2xl"></i></button>
                    </Link>
                </div>
    

            </div>
        </div>
       
        <div className='review-container'>
        <div className='txt-review'><h2>Reviews</h2></div>
        <Carousel responsive={responsive}>
         <div className='desc-review'>
            <h4>Abid Khan</h4>
            <p>Good Comfort Nice Quality</p>
            <p className='review-starts'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            
            Lorem ipsum dolor sit amet. </div>
         <div>
         <h4>Mithun Sen</h4>
            <p>Yeah! its really comfortable</p>
            <p className='review-starts'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            
            
            Lorem ipsum dolor sit amet.</div>
         <div>
         <h4>Ankit Gadhwe</h4>
            <p>Really ! awesome </p>
            <p className='review-starts'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            
            Lorem ipsum dolor sit amet.</div>
         <div>
         <h4>Anwar</h4>
            <p>So Comfortable </p>
            <p className='review-starts'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            Lorem ipsum dolor sit amet.</div>
         <div>
         <h4>Dibakar</h4>
            <p>nice! </p>
            <p className='review-starts'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            Lorem ipsum dolor sit amet.</div>
       
          </Carousel>
        </div>
        <div style={{marginTop:"50px"}}>
            <h2>Items You May Like</h2>
        <Slider/>
        </div>
       
            <div>
                <Footer />
            </div>
        </>
    );
};

export default ItemDescription;
