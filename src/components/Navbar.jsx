import React, { useState } from 'react'
import { Flex, Input, Group, Button } from "@mantine/core";

import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/productSlice';
import { useDisclosure } from '@mantine/hooks';
import Cart from '../pages/Cart';

const Navbar = () => {
    
    const dispatch = useDispatch();
    
    const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex gap={"md"} justify={"space-between"} align={"center"} mt={"md"}>
        {/* <Link to="/create">
          <Button>Create Product</Button>
        </Link> */}
        <h3>TheLoke</h3>
        <Flex gap={"md"} justify={"center"} align={"center"}>
          <Input
            placeholder="Search Product"
            onChange={(e) => dispatch(searchProduct(e.target.value))}
          />

          <Cart/>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar