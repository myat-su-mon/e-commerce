import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Rating,
  Flex,
} from "@mantine/core";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEye, AiOutlineShoppingCart } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/productSlice";
import Cookies from "js-cookie";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  // const cartItems = JSON.parse(Cookies.get("cart"));
  // const [cart, setCart] = useState(cartItems? [...cartItems] : []);
  const handleDelete = async (id) => {
    const docRef = doc(db, "products", id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          await deleteDoc(docRef);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });

    // const data = await deleteDoc(docRef);
    // console.log(data);
  };

  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder w={'18rem'} p={'md'}>
      <Flex direction={"column"}>
        <Flex justify={'center'}>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image src={product?.image} alt="Product Image" fit="contain" height={'200px'} width={'100%'}/>
          </Card.Section>
        </Flex>

        <Flex direction={"column"}>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{product?.title}</Text>
            <Badge color="pink" variant="light">
              {product?.category}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {product?.description}
          </Text>
          <Text size="lg" color="dimmed">
            ${product?.price}
          </Text>
          <Group position="left">
            <Rating value={product?.rating} fractions={5} readOnly />
          </Group>

          <Flex gap={"sm"}>
            <Link to={`/details/${product?.id}`}>
              <Button
                variant="light"
                color="green"
                fullWidth
                mt="md"
                radius="md"
              >
                <AiFillEye />
              </Button>
            </Link>
            {cart?.find((item) => item?.id === product?.id) ? (
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => dispatch(removeFromCart(product?.id))}
              >
                <RiDeleteBinLine />
              </Button>
            ) : (
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => dispatch(addToCart(product))}
              >
                <AiOutlineShoppingCart />
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductCard;
