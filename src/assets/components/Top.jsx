import React, { useState } from "react";
import { BiStore } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { BsDot, BsPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { ImHistory } from "react-icons/im";
import {} from "react-icons/go";
import {
  AiFillHeart,
  AiFillQuestionCircle,
  AiFillShopping,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineQuestion,
  AiOutlineQuestionCircle,
  AiOutlineRight,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoNotifications, IoReorderTwo } from "react-icons/io5";

function Top() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <div className="flex justify-start max-w-[90%] mx-auto my-2">
        <div className=" relative">
          <IoReorderTwo
            size={50}
            className=" text-red-600 font-extrabold"
            onClick={() => {
              setSideNav(true);
              // console.log(sideNav);
            }}
          />
          <BsDot
            onClick={() => {
              setSideNav(true);
              // console.log(sideNav);
            }}
            size={70}
            className="text-yellow-500 absolute bottom-0 left-1"
          />
        </div>
        <h1 className="text-4xl mx-6 font-semibold">Loyal Points</h1>
      </div>

      <div
        className={
          "bg-black/60 fixed w-full h-screen z-10 top-0 left-0 " +
          (sideNav ? "block" : "hidden")
        }
        onClick={() => {
          setSideNav(!sideNav);
        }}
      ></div>

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white"
        }
      >
        <div className="flex justify-evenly p-4">
          <img src="vanessa.jpg" alt="hello" className=" w-20 rounded-full" />
          <div className="flex justify-center items-center">
            <FaCrown size={60} className="text-yellow-500" />
            <p className="font-bold mx-5">0 Points</p>
            <AiOutlineRight />
          </div>
        </div>
        <div className="py-2 px-5">
          <p className="text-2xl font-bold">Vanessa Detera</p>
          <p>+639123456789</p>
        </div>
        <div className="mt-3">
          <div className="flex items-center px-5 py-1">
            <AiOutlineHome size={30} className=" text-red-400" />
            <p className="text-md font-bold mx-4">Home</p>
          </div>
          <div className="flex items-center px-5 py-1">
            <AiFillShopping size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">Order Now</p>
          </div>
          <div className="flex items-center px-5 py-1 justify-between">
            <div className="flex">
              <IoNotifications size={30} className=" text-gray-400" />
              <p className="text-md font-bold mx-4">Notifications</p>
            </div>
            <p className="rounded-full bg-yellow-400 py-1 px-3 text-sm text-white">
              4
            </p>
          </div>
          <div className="flex items-center px-5 py-1">
            <BiStore size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">Store Locator</p>
          </div>
          <div className="flex items-center px-5 py-1">
            <AiFillQuestionCircle size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">FAQs</p>
          </div>
        </div>
        <hr className="border-3" />
        <div className="mt-3">
          <div className="flex items-center px-5 py-1 justify-between">
            <div className="flex">
              <AiFillShopping size={30} className="text-gray-400" />
              <p className="text-md font-bold mx-4">My Orders</p>
            </div>
            <p className="rounded-full bg-yellow-400 py-1 px-3 text-sm text-white">
              2
            </p>
          </div>
          <div className="flex items-center px-5 py-1">
            <BsPersonFill size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">My Account</p>
          </div>
          <div className="flex items-center px-5 py-1">
            <AiFillHeart size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">My Favorite</p>
          </div>
          <div className="flex items-center px-5 py-1">
            <HiLocationMarker size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">Order Tracker</p>
          </div>
          <div className="flex items-center px-5 py-1">
            <ImHistory size={30} className=" text-gray-400" />
            <p className="text-md font-bold mx-4">Order History</p>
          </div>
        </div>
        <button className=" bg-red-600 rounded-3xl px-10 py-2 mt-10 text-white mx-8">
          Logout
        </button>
      </div>
    </>
  );
}

export default Top;
