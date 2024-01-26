import React from "react";

const Card = ({
  pic = "https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg",
  title = "",
  dec = "",
  rate,
  qty,
}) => {
  return (
    <div className="card border border-1">
      <img src={pic} alt="" className="h-[200px] w-full object-cover " />
      <div className="mt-2">
        <div className="flex  items-center justify-between">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div>
            {rate} * {qty}
          </div>
        </div>
        <p className="text-gray-600">{dec}</p>
      </div>
    </div>
  );
};

export default Card;
