import React from "react";
import { FaCrown } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

function Mid() {
  return (
    <div className="max-w-[90%] m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between">
          <FaCrown size={60} className=" text-yellow-400" />
          <p className="font-bold text-lg mx-6">Beginner Tier</p>
        </div>
        <div className="flex justify-evenly items-center text-red-500">
          <p className="mx-5">View All</p>
          <BsChevronRight />
        </div>
      </div>
      <p className=" text-gray-500">
        Earn points by purchasing from our store. Vestibulum ante ipsum dolor
        primis in sdniadi orci luctus et.
      </p>
      <div className="flex items-center justify-center mt-10">
        <div className="rounded-full  border-red-300 border-[30px] ">
          <p className=" lg:px-28 lg:py-32 font-bold text-[60px] px-16 py-20">
            1/60
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mid;
