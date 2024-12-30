import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export const SingleRQ = () => {
  const { Id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", Id],
    queryFn: () => {
      return axios.get(`http://localhost:1000/posts/${Id}`);
    },
  });
  if(isLoading){
    return <div className="text-3xl h-screen ">Loading...</div>
  }
  if(isError){
    return <div className="text-3xl h-screen text-red-600">{error.message}</div>
  }
  return (
    <div className="h-screen ">
      SingleRQ
      <div className="border p-5 ">
        <p>{data?.data.id}</p>
        <p>{data?.data.title}</p>
        <p>{data?.data.body}</p>
      </div>
    </div>
  );
};
