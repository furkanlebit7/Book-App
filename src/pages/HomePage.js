import React from "react";

const MainPage = () => {
  return (
    <div className="flex justify-between flex-auto items-center">
      <div className="flex flex-col justify-evenly ">
        <h1 className="text-7xl text-tRed ">
          WORLD<span className="block text-8xl text-tBrown my-2">BOOK DAY</span>
          April 23
        </h1>
        <div className="text-tBrown mt-20">
          <h3 className="text-3xl">CELEBRATE WITH US</h3>
          <p className="text-xl my-5">
            AVENUE BOOK STORE,
            <br />
            8842 MELROSE ST. LA, CALIFORNIA
          </p>
          <h3 className="text-3xl">START AT 10:00 AM</h3>
          <button className="bg-tRed text-xl p-2 mt-3 px-20 rounded-full text-white">
            DETAILS
          </button>
        </div>
      </div>
      <div>
        <img src={require("../assets/images/efefef2.png")} alt="book" />
      </div>
    </div>
  );
};

export default MainPage;
