import React from "react";

import ManageData from "../data/ManageData";

const Manage = () => {
  return (
    <section className="w-full py-8">
      <div className="mx-[5%] md:mx-[10%] flex md:flex-row flex-col gap-8">
        <div className="text-center md:text-left">
          <h2 className="md:text-3xl text-4xl">
            What's different about Manage?
          </h2>
          <p className="py-4 md:w-[85%]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div>
          {ManageData.map((item) => (
            <div key={item.id} className="flex gap-4 pb-4">
              <span className="absolute bg-brightRed text-white rounded-2xl py-1 md:px-4 px-5">
                {item.id}
              </span>
              <div className="md:mt-2 md:ml-[4rem]">
                <h5 className="bg-veryPaleRed md:bg-opacity-0 p-1 md:p-0 rounded-2xl w-full text-center md:text-left">
                  {item.heading}
                </h5>
                <p className="py-4 md:w-[83%] leading-8">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
