import React from "react";

function Error({ error }) {
  const { code, message } = error;
  return (
    <div className="text-3xl w-fit mt-10 h-svh mx-auto  text-[red]">
      <div className="p-5 border bg-white">
        <p>Please try again later.</p>
        <p>{code}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Error;
