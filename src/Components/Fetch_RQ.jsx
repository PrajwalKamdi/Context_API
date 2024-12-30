import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Fetch_RQ = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:1000/posts");
    },
  });
  console.log(data?.data);
  if(isLoading){
    return <div className="h-screen text-3xl m-auto">Loading.....</div>
  }
  if(isError){
    return <div className="h-screen text-3xl m-auto">{error.message}</div>
  }
  return (
    <div className="h-max">
      Fetch_RQ
      <div>
        {data?.data.map((item) => (
          <div key={item.id} className="border p-2 text-center">
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <Link to={`post/${item.id}`} className="border p-1 my-2">Click Me</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch_RQ;
