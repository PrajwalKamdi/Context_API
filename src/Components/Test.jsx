import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export const Test = () => {
  const [value, setValue] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", value],
    queryFn: () => {
      return axios.get(`https://fakestoreapi.in/api/products${value}`);
    },
  });
  if (isError) {
    return (
      <div className="m-auto text-3xl">
        {error.message}
        <p>Please try again later!</p>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="w-fit p-5 border">
        <h2 className="text-3xl">Filters</h2>
        <div className="border p-5 ">
          <h3 className="text-2xl mb-2">Categories</h3>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("")}
              defaultChecked
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("/category?type=tv")}
            />
            <label htmlFor="all">TV</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("/category?type=audio")}
            />
            <label htmlFor="all">Audio</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("/category?type=mobile")}
            />
            <label htmlFor="all">Mobile</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("/category?type=gaming")}
            />
            <label htmlFor="all">Gaming</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="All"
              name="cat"
              onClick={() => setValue("/category?type=appliances")}
            />
            <label htmlFor="all">Appliances</label>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="text-6xl animate-pulse m-auto">Loading.....</div>
      ) : (
        <div className="grid grid-cols-4 gap-5 p-5">
          {data?.data.products.map((item) => (
            <div key={item.id} className="border p-3">
              <img src={item.image} alt={item.brand} className="" />
              <p className="line-clamp-1">{item.title}</p>
              <p>{item.brand}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
