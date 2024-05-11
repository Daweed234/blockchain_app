import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

import { Loader } from "./";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className=" flex flex-row md:flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient">Send Crypto <br /> accross the world</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
