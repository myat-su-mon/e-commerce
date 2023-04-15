import { Flex } from "@mantine/core";
import React from "react";

const Hero = () => {
  return (
    <Flex align={'center'} gap={'sm'}>
      <Flex className="left">
        <img
        width={'500px'}
          height={'400px'}
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </Flex>
      <Flex className="right" direction={"column"}>
        <div className="top">
          <img
          width={'300px'}
            height={'50%'}
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <Flex className="bottom">
          <div className="left">
            <img
              height={"200px"}
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="right">
            <img
              height={"200px"}
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
