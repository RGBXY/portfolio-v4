import React from "react";

const page = () => {
  return (
    <main className="h-full w-full flex justify-center">
      <section className="w-full h-full pt-20">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-9">
          <h1 className="text-6xl font-serif">Get in Touch!</h1>

          <div className="flex w-full h-full">
            <div className="flex-1" >
              <div className=" bg-gray-400 h-40"></div>
              <div className=" bg-blue-400"></div>
            </div>
            <div className="flex-1 bg-red-400"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
