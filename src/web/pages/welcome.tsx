import React from "react";

const Welcome = (props: { message: string }) => {
  return (
    <div className="container">
      <h1>{props?.message}</h1>
    </div>
  );
};

export default Welcome;
