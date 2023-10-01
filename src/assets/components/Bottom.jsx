import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";

function Bottom() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Rewards</h1>
        <div className="flex justify-evenly items-center text-red-500">
          <p className="mx-5">How it Works</p>
          <BsChevronRight />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className=" rounded-2xl bg-red-600 text-white font-medium text-xl px-3 py-3 m-1">
          All
        </button>
        <button className=" rounded-2xl bg-gray-200 font-medium text-xl px-3 py-3 m-1">
          Beginner
        </button>
        <button className=" rounded-2xl bg-gray-200 font-medium text-xl px-3 py-3 m-1">
          Intermediate
        </button>
        <button className=" rounded-2xl bg-gray-200 font-medium text-xl px-3 py-3 m-1">
          Loyal
        </button>
      </div>
      <div className="bg-gray-300 border rounded-3xl mt-10 flex items-center p-5 mb-5">
        <img
          src="Dinner.jfif"
          className="w-[200px] rounded-full"
          alt="Dinner"
        />
        <div className="flex flex-col mx-5">
          <p className="font-bold text-2xl">Steak Fries Vegies</p>
          <p>Meat</p>
          <p className="flex items-center text-red-500 text-2xl">
            <FaCrown className="mr-2 text-yellow-500" />
            20 points
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
