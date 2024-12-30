import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState([]);

  const Url = "https://fakestoreapi.in/api/products";
  async function gettingData() {
    try {
      const d1 = await fetch(Url);
      const d2 = await d1.json();
      setState(d2.products);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    gettingData();
  }, []);
  if (error) {
    return (
      <div className="text-3xl  text-red-800 text-center h-max">
        {error.message}
      </div>
    );
  }
  return (
    <div className="text-center text-3xl   mx-auto  border-slate-950">
      <h1 className="border p-2  border-slate-800">
        Fetching Data In Optimized Manner
      </h1>
      {isLoading ? (
        <div className="text-3xl animate-pulse h-screen"> Loading....</div>
      ) : (
        <div className="text-sm border p-5 mt-5 border-slate-800">
          {state.map((item) => (
            <div key={item.id} className="border m-2 p-2 border-slate-950 bg-teal-600 text-white">
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
