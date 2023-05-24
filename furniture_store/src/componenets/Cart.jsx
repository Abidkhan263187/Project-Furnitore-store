
import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  IconButton,
  Flex,
  Stack,
  Spacer,
  Divider,
  Image,
  StackDivider,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  return (
    <Box p={4} >
      <Text fontSize="xl" mb={4}>
        Your Order
      </Text>

      <Stack spacing={4} >
        {cartItems.map((item) => (
          <Box
         
            key={item.id}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            boxShadow="md"
            display="flex"
            alignItems="center"
          >
            <Image src={item.imageSrc} alt={item.name} boxSize="80px" objectFit="cover" mr={4} />
            <Flex align="center" >
              <Text>{item.name}</Text>
              <Spacer />
              <Text fontWeight="bold">${item.price}</Text>
            </Flex>
            <Flex align="center" mt={2}>
              <IconButton
                icon={<MinusIcon />}
                aria-label="Decrease Quantity"
                onClick={() => decreaseQuantity(item.id)}
                size="sm"
                disabled={item.quantity <= 1}
              />
              <Text mx={2}>{item.quantity}</Text>
              <IconButton
                icon={<AddIcon />}
                aria-label="Increase Quantity"
                onClick={() => increaseQuantity(item.id)}
                size="sm"
              />
            </Flex>
          </Box>
        ))}
      </Stack>

      <Divider my={4} />

      <Flex justify="flex-end">
        <Text fontSize="lg" fontWeight="bold">
          Total: ${getTotalPrice()}
        </Text>
      </Flex>

      <Button colorScheme="blue" mt={4} width="full">
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;





