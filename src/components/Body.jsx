import React, { useState } from "react";
import { mobiles } from "../data/mobiles";

const Body = () => {
  let [items, setItems] = useState(mobiles);

  return (
    <div className=" p-10 justify-center items-center ">
      <div className=" flex justify-center  text-5xl font-medium ">
        Which iPhone is right for you
      </div>
      <div className="mt-32 gap-4 flex  flex-wrap">
        {items.map((item) => (
          <div
            className="w-40 flex flex-col gap-y-2 justify-between bg-slate-300 rounded p-4"
            key="item.id"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-[151px] h-[204px] object-cover"
            />

            <p className="text-xs text-red-500">New</p>
            <h3 className="text-2xl font-medium">{item.name}</h3>

            <h2>{item.description}</h2>

            <p>From ₹{item.price}*</p>

            <button className="bg-blue-600 text-white items-center text-xs cursor-pointer w-23px p-1  rounded-md ">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
