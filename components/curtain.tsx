import React from "react";

interface CurtainProps {}
const Curtain = () => {
  return (
    <>
      <div className="absolute h-full w-6/12 bg-black p-4 flex flex-col">
        <div className="flex flex-row justify-start">
          <a href="http://twitter.com" target="_blank" className="text-white">
            @mxkaske
          </a>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <p className="text-white">Hello</p>
        </div>
        <p className="text-white">Stay tuned for more updates.</p>
      </div>
    </>
  );
};

export default Curtain;
