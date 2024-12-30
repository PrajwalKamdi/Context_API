import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "./Error";
import { getData } from "../Service/Service";
import { Link } from "react-router-dom";

const Axios_Fetch = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const fetchData = async () => {
    try {
      const d1 = await getData();
      // console.log(d1.data);
      setState(d1.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl border p-2  w-fit mx-auto ">
        Post By Random Peoples
      </h1>
      {error ? <Error error={error} /> : null}
      <div>
        {isLoading ? (
          <div className="animate-pulse text-3xl text-center my-5 h-screen">
            Loading.....
          </div>
        ) : (
          <div>
            {state.map((post) => (
              <div key={post.id} className="border h-fit my-4 p-5 text-center">
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p className="mb-2">{post.body}</p>
                <Link
                  to={`posts/${post.id}`}
                  className="border p-2 hover:bg-blue-500"
                >
                  Click
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Axios_Fetch;
