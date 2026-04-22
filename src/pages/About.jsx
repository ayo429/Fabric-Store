import React from "react";
import Button from "../shared components/Button";
function About() {
  return (
    <div>
      <div className="container flex flex-col gap-2">
        <div className="header flex justify-center items-center bg-red-800 text-extrabold text-2xl text-white">
          <h2 className="">About Page</h2>
        </div>
        <div className="btn">
          <Button/>
        </div>
        <div className="text">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            perferendis praesentium! Architecto quis quo, animi excepturi soluta
            tenetur commodi quibusdam fuga in voluptas itaque, perspiciatis
            deleniti iste, minus molestias voluptates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
