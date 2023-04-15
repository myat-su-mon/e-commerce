import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/productSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import ProductCard from "../components/ProductCard";
import { Button, Container, Flex, Input } from "@mantine/core";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const collectionRef = collection(db, "products");

  const fetchProducts = () => {
    onSnapshot(collectionRef, (docs) => {
      const data = [];
      docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      dispatch(addProducts(data));
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Flex
        gap={"md"}
        my={"md"}
        wrap={"wrap"}
        justify={"center"}
        align={"center"}
      >
        {products
          ?.filter((product) => {
            // if (searchTerm === "") {
            //   return product;
            // } else
            if (
              product?.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Flex>
    </>
  );
};

export default Products;
