import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, Box, Text, Flex, Paper } from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { emptyCart } from "../redux/productSlice";
import EmptyCart from "../assets/empty-cart.mp4";

const Cart = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const total = cart?.reduce(
    (prev, current) => prev + current.price * current.qty,
    0
  );

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Shopping Cart"
        position={"right"}
      >
        <Flex justify={"space-between"} direction={"column"} h="85vh">
          {cart?.length ? (
            <Box>
              {cart?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </Box>
          ) : (
            <video src={EmptyCart} autoPlay loop height={"300px"} />
          )}
          <Flex direction={"column"} gap={"sm"} py={"lg"}>
            <Paper w={"100%"} shadow="lg" py={"lg"}>
              <Text align="center" py={"md"}>
                Total Price - $ {total}
              </Text>
              <Button onClick={() => dispatch(emptyCart())}>Empty Cart</Button>
            </Paper>
          </Flex>
        </Flex>
      </Drawer>

      <Group position="center">
        <Button onClick={open}>
          <AiOutlineShoppingCart />
          {cart ? cart.length : 0}
        </Button>
      </Group>
    </div>
  );
};

export default Cart;
