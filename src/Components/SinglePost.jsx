import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../Service/Service";

const SinglePost = () => {
  const { Id } = useParams();
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  async function retriveData() {
    try {
      const d1 = await getSinglePost(Id);
      setState(d1.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    retriveData();
  }, [Id]);
  const { id, title, body } = state;
  return (
    <div className="h-screen">
      {error ? <Error error={error} /> : null}
      <div>
        {isLoading ? (
          <div className="my-auto text-center text-3xl animate-pulse">
            Loading....
          </div>
        ) : (
          <div className="p-5 border mx-auto w-fit ">
            <p>ID : {id}</p>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
