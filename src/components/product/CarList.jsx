import React, { useMemo, useState, useEffect } from "react";
import Title from "../common/Title";
import Card from "../common/Card";

const CarList = () => {
  const [list, setList] = useState([
    {
      title: "Audi",
      dec: "Audi is best Car",
      id: 1,
      price: 10,
      qty: "2",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/141373/q3-sportback-exterior-right-front-three-quarter-2.jpeg?isig=0",
    },
    {
      title: "Mercedese",
      dec: "Mercedese is best Car",
      id: 2,
      price: 19,
      qty: "3",
      image:
        "https://www.arthur-bechtel.com/images//c90b80095fda5b629f5a6814758c72eceb62f8de_MB280SL_Pagode_rechtslenker_Hellblau_1340_02_mobil-w630-h420-cut.jpg",
    },
    {
      title: "Mustang",
      dec: "Mercedese is best Car",
      id: 3,
      price: 15,
      qty: "3",
      image:
        "https://i.insider.com/636d154ef5877200181c4542?width=1136&format=jpeg",
    },
    {
      title: "Chevrolet Corvette 427",
      dec: "Chevrolet Corvette 427 is best Car",
      id: 4,
      price: 17,
      qty: "7",
      image:
        "https://otoklasyki.pl/media/cache/poster_medium/chevrolet-corvette-1677067613210_63f88e7049a3e.webp",
    },
  ]);

  const [show, setShow] = useState("");
  const [mapData, setMapData] = useState([]);

  const filterList = useMemo(() => {
    return show === "high"
      ? list.filter((item) => item?.price >= 15)
      : show === "low"
      ? list.filter((item) => item?.price < 15)
      :  list ;
  }, [show,list]);

  useEffect(() => {
    setMapData(filterList);
  }, [filterList]);

  const totalQty = useMemo(() => {
    return mapData.reduce((acc, item) => acc + parseInt(item?.qty), 0);
  }, [mapData]);

  const totalAmount = useMemo(() => {
    return mapData.reduce(
      (acc, item) => acc + parseFloat(item.price * item?.qty),
      0
    );
  }, [mapData]);

  return (
    <div className="space-y-10 mt-5">
      <div className="flex items-center justify-between">
        <Title titleName={"Product List"} />
      </div>
      <div className="flex gap-4 justify-end mr-10">
        <div>
          <button
            className="bg-blue-700 text-white p-2 rounded-lg"
            onClick={() => {
              setList((pre) => {
                return [
                  ...pre,
                  {
                    title: "Cars",
                    dec: "this is Car",
                    id: list?.length + 1,
                    qty: 2,
                    price: 10,
                  },
                ];
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="filter">
          <div className="relative group hover:block">
            <button className="bg-blue-700 text-white p-2 rounded-lg">
              Filter
            </button>
            <div className="bg-gray-200 absolute group-hover:block rounded-xl py-3  hidden -right-[30px]">
              <button
                onClick={() => {
                  setShow("high");
                }}
                className="block hover:bg-blue-700 hover:text-white py-1 right-50 top-0 w-24"
              >
                High Price
              </button>
              <button
                onClick={() => {
                  setShow("low");
                }}
                className="block hover:bg-blue-700 hover:text-white py-1 right-50 top-0 w-24"
              >
                Low Price
              </button>
              <button
                onClick={() => {
                  setShow("all");
                }}
                className="block hover:bg-blue-700 hover:text-white py-1 right-50 top-0 w-24"
              >
                All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {Array.isArray(mapData) &&
          mapData.map((item, index) => {
            return (
              <Card
                key={index}
                dec={item?.dec}
                pic={item?.image}
                title={item?.title}
                qty={item?.qty}
                rate={item?.price}
              />
            );
          })}
      </div>

      <div className="flex flex-col items-end mr-7">
        <p>
          <span className="font-medium text-xl">Total Quantity:</span>{" "}
          {totalQty}
        </p>
        <p>
          <span className="font-medium text-xl">Total Amount:</span>{" "}
          {totalAmount}
        </p>
      </div>
    </div>
  );
};

export default CarList;
