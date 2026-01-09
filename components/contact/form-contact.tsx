"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

const FormContact = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const services = formData.get("services");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, services }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="w-full md:w-1/2 border shadow flex flex-col gap-5 items-center justify-center bg-white rounded-lg lg:p-14 md:p-10 p-6">
      <form onSubmit={handleSubmit} className="space-y-5 max-w-md w-full">
        <div className="w-full text-gray-600">
          <label htmlFor="name" className="mb-1 text-sm ">
            Name
          </label>
          <input id="name" name="name" placeholder="Tyler Durden" required className="mt-1 w-full border py-3 px-4 border-gray-300  bg-white/50 shadow-gray-200" />
        </div>
        <div className="w-full text-gray-600">
          <label htmlFor="name" className="mb-1 text-sm ">
            Email
          </label>
          <input name="email" type="email" placeholder="durden@gmail.com" className="mt-1 w-full border py-3 px-4 border-gray-300  bg-white/50 shadow-gray-200" />
        </div>
        <div className="w-full text-gray-600">
          <label htmlFor="services" className="mb-1 text-sm ">
            Services
          </label>

          <select name="services" id="services" required defaultValue="" className="mt-1 w-full border py-4 px-3 border-gray-300 text-sm bg-white/50 shadow-gray-200 text-gray-600">
            <option value="" disabled>
              What can I help you?
            </option>
            <option value="Website Development">Website Development</option>
            <option value="Design UI/UX">Design UI/UX</option>
            <option value="Product Development">Product Development</option>
          </select>
        </div>

        <div className="w-full text-gray-600">
          <label htmlFor="name" className="mb-1 text-sm ">
            Message
          </label>
          <textarea name="message" placeholder="Your message" required className="mt-1 w-full border py-3 px-4 border-gray-300  bg-white/50 shadow-gray-200 h-30" />
        </div>
        <Button type="submit" disabled={loading} className="px-4 py-3 h-fit w-full bg-black text-white">
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
