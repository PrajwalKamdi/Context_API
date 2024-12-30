import React from "react";
import { Link } from "react-router-dom";

const Custom_Tab = () => {
  return (
    <div className="p-5 h-screen text-center mx-auto ">
      <hr />
      <div className="mt-5 space-x-5 text-2xl">
        <Link to={"Fetch_Api"} className="border-[2px] p-2 border-slate-900 ">
          Fetch_Api
        </Link>
        <Link to={"Axios_Api"} className="border-[2px] p-2 border-slate-900">
          Axios_Api
        </Link>
        <Link to={"Fetch_RQ"} className="border-[2px] p-2 border-slate-900">
          Fetch_RQ
        </Link>
        <Link to={"Test"} className="border-[2px] p-2 border-slate-900">
          Test
        </Link>
      </div>
    </div>
  );
};

export default Custom_Tab;
