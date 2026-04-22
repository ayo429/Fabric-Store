import React from "react";
import Button from "../shared components/Button";
function Varities() {
  return (
    <>
      <div className="container flex flex-col gap-2">
        <div className="header">
          <h2 className="bg-red-800 text-white font-extrabold text-2xl text-center">Service Page</h2>
        </div>
        <div className="btn">
          <Button/>
        </div>
        <div className="content">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            excepturi iure laudantium provident officia, sapiente a, unde,
            consequuntur eum saepe sint fugiat ipsam at reiciendis dolores
            nihil. Deserunt, facilis animi!
          </p>
        </div>
      </div>
    </>
  );
}

export default Varities;
