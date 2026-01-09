import React from "react";

const AboutDetail = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <div className="space-y-10">
          <div className="text-4xl">
            <h1 className="font-medium">Derren Amadeo</h1>
            <h1 className="font-serif tracking-wide italic text-gray-800">Creative Developer</h1>
          </div>
          <div className="max-w-3xl leading-8 text-gray-800 text-lg space-y-8">
            <p>
              I’m <span className="font-bold">Derren Amadeo</span>, a <span className="font-bold">product-oriented full-stack developer </span> with <span className="font-bold">over 2 years of experience</span> building and shipping
              real-world web products. My journey into technology began with a simple curiosity — how people use the web, how interfaces guide behavior, and why some products feel intuitive while others feel frustrating.
            </p>
            <p>
              I combine <span className="font-bold">UI/UX thinking, front-end development, and back-end</span> logic to create products that are not only functional, but also thoughtfully designed. Having worked on real, implemented
              projects, I’ve learned how to adapt, iterate, and make decisions that balance
              <span className="font-bold"> user needs, technical constraints, and product goals.</span>
            </p>

            <p>
              Whether designing interfaces, writing code, or shaping product decisions, I approach every challenge with <span className="font-bold"> intent, empathy, and clarity.</span> To me, great products aren’t built by design or
              engineering alone — they’re built when design, technology, and product thinking come together naturally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
