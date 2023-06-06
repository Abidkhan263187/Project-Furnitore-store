import React, { useEffect, useState } from 'react';
import './ItemDescription.css';
import Footer from '../Home/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { SlideCard } from '../Home/SlideCard';
import Slider from '../Home/Slider';
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, getProduct } from '../../Redux/api';
import { useParams } from 'react-router-dom';
import { Box, Text, border } from '@chakra-ui/react';

const ItemDescription = () => {
    const { id,product } = useParams()

    const { single} = useSelector((store) => {
        return store
    })

    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getProduct(id, product))
    }, [])
console.log(product);
    const[obj,setObj]=useState({})

    useEffect(() => {
        setObj(single)
        setSelectedImage(single.image);
    }, [single]);


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
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);
    const handleCart = () => {

        const prod={
            name:single.name,
            price:single.price,
            image:single.image,
            mrp:single.mrp,
            quantity:single.quantity,
            discount:single.discount,
            rating:single.rating,
            
        }


        dispatch(addtoCart(prod))
        alert("Item added into Cart")
    }
    return (
        <>
            <div className="desc-container" style={{ width: '90%' }} >
            
                <div className="thumbnails " style={{}}>
                    <div className="thumbnail" onClick={() => handleThumbnailClick(single.image2)}>
                        <img src={single.image2} alt="Thumbnail 1" />
                    </div>
                    <div className="thumbnail" onClick={() => handleThumbnailClick(single.image3)}>
                        <img src={single.image3} alt="Thumbnail 2" />
                    </div>
                    <div className="thumbnail" onClick={() => handleThumbnailClick(single.image4)}>
                        <img src={single.image4} alt="Thumbnail 3" />
                    </div>
                    <div className="thumbnail" onClick={() => handleThumbnailClick(single.image5)}>
                        <img src={single.image5} alt="Thumbnail 4" />
                    </div>
                </div>
                {/* 2nd  */}
                <div className="desc-image">
                    <img src={selectedImage} style={{ margin: " 15% auto", width: "100%" }} alt="Furniture" />
                </div>

                <div className="details-details" >
                    <h2 className="details-name" style={{}}>{single.name}</h2>
                    <Text fontWeight={"600"} color={"green"} fontSize={["xs", "sm", "lg", "lg"]}>Special Price</Text>
                    <p className="details-price">${single.price}</p>
                    <s className="details-mrpprice">${single.mrp}</s>

                 
                    <div className='details-discount'>
                         <span className='details-disc'>{single.discount}%   Off</span>
                         <Text className='abid-rating-div'>{single.rating}<i style={{paddingLeft:"3px"}} class="fa-solid fa-star"></i></Text>
                          <Box className='abid-discount-div'><i class="fa-solid fa-otter"></i>   best Seller</Box>
                    </div>
                  
                    <div className='details-dimension'>
                     <Text fontSize={"lg"} fontWeight={"600"}>Bank Offers</Text>
                     
                     <Text fontSize={"sm"} mt={"5px"}> <i style={{color:"green"}} class="fa-solid fa-tag" ></i>  Special PriceGet extra 28% off (price inclusive of cashback/coupon) <span style={{color:" #cc5500"}}>T&C</span> </Text>

                     <Text fontSize={"sm"} mt={"5px"}> <i style={{color:"green"}} class="fa-solid fa-tag"></i> Sign up for Flipkart Pay Later get Flipkart Gift Card worth  ₹1,000* <span style={{color:" #cc5500"}}>Know More</span> </Text>

                     <Text fontSize={"sm"} mt={"5px"}> <i style={{color:"green"}} class="fa-solid fa-tag"></i> Partner OfferBuy this product and get upto ₹250 Off <span style={{color:" #cc5500"}}> Know More</span></Text>

                     <Text fontSize={"sm"} mt={"5px"}> <i style={{color:"green"}} class="fa-solid fa-tag"></i> Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card ₹15,000 to ₹39,999 <span style={{color:" #cc5500"}}>T&C</span> </Text>
                    </div>

                    <p className="details-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque.
                    </p>
                    <div className='details-buy-btn-div'>
                        <Link ><button className="details-buy-now" onClick={handleCart}>Add to Cart</button>
                        </Link>

                        <Link>
                            <button className="details-add-now"><i class="fa-solid fa-heart fa-2xl"></i></button>
                        </Link>
                    </div>


                </div>

            </div>

            <hr />
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
            <div style={{ marginTop: "50px" }}>
                <h2>Items You May Like</h2>
                <Slider />
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
};

export default ItemDescription;
