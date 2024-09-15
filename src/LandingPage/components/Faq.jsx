import React from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <>
      <div className=" flex flex-col justify-start " id="faqs">
        <div className="text-center text-6xl  lg:ml-20 capitalize text-white mt-2">
          FAQ's
        </div>
        <Accordion />
      </div>
    </>
  );
}

export default Faq;
