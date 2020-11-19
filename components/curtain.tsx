import React from "react";
import Button from "./button";

interface CurtainProps {}
const Curtain = () => {
  return (
    <>
      <div className="absolute h-full w-6/12 bg-black p-4 flex flex-col">
        <div className="flex flex-row justify-start">
          <p className="text-white">
            <a href="http://twitter.com" target="_blank">
              @mxkaske
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <h1 className="text-white">Hello...</h1>
          <div>
            <Button
              className="text-white"
              label="press me"
              onClick={() => console.log("yeah")}
            />
          </div>
        </div>
        <p className="text-white">Stay tuned for more updates.</p>
      </div>
    </>
  );
};

export default Curtain;
