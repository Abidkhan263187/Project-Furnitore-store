import React from 'react'
import {Image,Stack,Text,ButtonGroup,Heading, HStack, Box} from '@chakra-ui/react'
  import { Card,Button, CardBody, CardFooter } from '@chakra-ui/react'
  import { Link, useParams } from 'react-router-dom'
 import './Card.css'
import { addtoCart } from '../../Redux/api'
import { useDispatch } from 'react-redux'

export const ProductCard = ({image,id,name,rating,discount,price,mrp,quantity}) => {
  const {prod_params}=useParams()
const dispatch=useDispatch()
  const handleCart = () => {
    const single={
      name:name,
      price:price,
      image:image,
      mrp:mrp,
      quantity:quantity,
      discount:discount,
      rating:rating,
    
    }
    dispatch(addtoCart(single))
    alert("Item added into Cart")
}
  return (
    <Card  maxW='sm' height={[ "320px","450px","380px","485px"]}  className='abid-Product-Card' >
    <CardBody>
      <div className='abid-card-img-div'>
      <Link to={`${id}`}>
     <Image
        src={image}
        borderRadius='lg'
       
      />
     </Link>
      </div>
    
      <Stack mt='2' spacing='1px' textAlign={"left"}>
        <Text fontWeight={"600"} color={"gray.600"} fontSize={["xs", "sm", "md", "xl"]}>{name}</Text>
        <Text color='yellow.600' fontWeight={"600"} fontSize={["xs", "sm", "lg", "lg"]}> ${price} </Text>
        <Text color='black.600' textDecoration={"line-through"}  fontWeight={"600"} fontSize={["xs", "sm", "lg", "md"]} textDecorationColor={"line-through"}> ${mrp} </Text>
       
          <Text color={"orange"} fontWeight={"600"} fontSize={["xs", "sm", "md", "md"]}>{discount}%  Off</Text>
          <Box className='abid-delivery-box'>
          <Text color={"white"} fontSize={"12px"} id='rat-abid' border="1px solid" bg={'green'} padding={"3px 5px"} width="37px"  borderRadius={"5px"} fontWeight={"700"}>{rating}<i style={{paddingLeft:"3px"}} class="fa-solid fa-star"></i></Text>
         <Box  fontWeight={"700"} color={"green"}>free delivery  <i class="fa-solid fa-truck-fast"></i></Box>
          </Box>
         
        
      </Stack>
    </CardBody>
    {/* <Divider /> */}
    <CardFooter>
      <ButtonGroup className='product-abid-btn-div'>
        <Button variant='solid' colorScheme='#ff9015' borderRadius={"10px 0px 10px 0px"} id='card-buy-btn' size={["xs", "sm", "sm", "sm"]} padding={"5px"}>
          Buy now
        </Button>
        <Button variant='solid'  colorScheme='#ff9015' id='card-buy-btn'    borderRadius={"10px 0px 10px 0px"} onClick={handleCart} size={["xs", "sm", "sm", "sm"]}>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
