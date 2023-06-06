
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import './UserInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { userInfor } from '../../Redux/action'
import { Link } from 'react-router-dom'
import { cartTotal } from '../../Redux/action'
import { useNavigate } from 'react-router-dom'


export const UserInfo = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { carttotal } = useSelector((store) => {
    return store
  })
  const [info, setInfo] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: ''
  })
  const navigate=useNavigate()
  const [cart_total, setCartTotal] = useState(carttotal);
  const [promo, setPromo] = useState("")


  const handleClick = () => {
    if (
      info.fname.trim() === '' ||
      info.lname.trim() === '' ||
      info.phone.trim() === '' ||
      info.email.trim() === ''
    ) {
      alert('Please fill in all the fields');
      return;
    }
      // console.log(info)
    dispatch(userInfor(info))
    setInfo({ ...info, fname: '', lname: '', phone: '', email: '' })
    navigate('/payment')
  }

  const handleApply = () => {

  
    if (promo === "abid40") {
      let val = cart_total * 0.4; let afterPromo = Math.floor(cart_total - val);
      setCartTotal(afterPromo); dispatch(cartTotal(afterPromo))
      toast({
        title: 'promo aplied',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    else if (promo === "masai60") {
      let val = cart_total * 0.4; let afterPromo = Math.floor(cart_total - val);
      setCartTotal(afterPromo); dispatch(cartTotal(afterPromo))
      toast({
        title: 'promo aplied',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    
    setPromo('');
  }

  return (
    <Box className='abid-userInfo-container' >
      <Box className='userInfo-head-abid'> <Heading fontSize={'3xl'} color={'gray.600'}>Your Information</Heading> </Box>
      <Box className='userInfo-inner-abid' >
        <Box width={"45%"}  >
          <FormControl className='abid-user-form' isRequired>

            <Input type='text' name="fname" placeholder='First name' value={info.fname} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
            <Input type='text' name='lname' placeholder='Last name' value={info.lname} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
            <Input type='number' name='phone' placeholder='Phone ' value={info.phone} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
            <Input type='email' name='email' placeholder='Email' value={info.email} onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} />
          </FormControl>
        </Box>
        <Box className='promo-div-abid' width={'45%'}>
          <Box className='promoo2'>
            <Input placeholder='Enter Promo' w={[ "100%" ,"80%","60%", "60%"]} onChange={(e) => setPromo(e.target.value)} />
            <Button id='userInfo-btn' w={"30%"} fontSize={"md"} size={"md"} onClick={handleApply}>Apply </Button>
          </Box>
          
          <Box className='userInfo-total-box-abid' >

            <Text id='total-on-user'   >Total    </Text>
            <Text id='total-on-user'>${cart_total ? cart_total : "0"}</Text>
          </Box>
        </Box>
      </Box>
      <Box className='user-next-btn'> <Button id='userInfo-btn' w={"90%"} fontSize={"lg"} size={"md"} onClick={handleClick} >next</Button></Box>
    </Box>
  )
}


