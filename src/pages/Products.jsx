import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import ProductCard from "../components/ProductCard";
import { Button, Container, Flex, Input } from "@mantine/core";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const collectionRef = collection(db, "products");

  const fetchProducts = () => {
    onSnapshot(collectionRef, (docs) => {
      const data = [];
      docs.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setProducts(data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Flex gap={"md"} justify={"space-between"} mt={"md"}>
        <Link to="/create">
          <Button>Create Product</Button>
        </Link>
        <Input
          placeholder="Search Product"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Flex>
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
        {/* {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </Flex>
    </>
  );
};

export default Products;
