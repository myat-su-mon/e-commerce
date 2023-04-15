import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, Box, Text, Flex } from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Cookies from "js-cookie";

const Cart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const cart = useSelector((state) => state.products.cart);
  // const cartItems = JSON.parse(Cookies.get("cart"));
  const total = cart.reduce(
    (prev, current) => prev + current.price * current.qty,
    0
  );
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Cart Item"
        position={"right"}
      >
        <Flex justify={"space-between"} direction={"column"} h={"80vh"}>
          <Box>
            {cart?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Box>
          <Box>
            <Text>Total Price - $ {total}</Text>
          </Box>
        </Flex>
      </Drawer>

      <Group position="center">
        <Button onClick={open}>
          <AiOutlineShoppingCart />
          {cart? cart.length : 0}
        </Button>
      </Group>
    </div>
  );
};

export default Cart;
