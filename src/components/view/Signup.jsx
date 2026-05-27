import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/Login");
  }

  return (
    <section className="px-4 bg-off-white min-h-screen flex items-center">
      <div className="max-w-147.5 mx-auto p-16 shadow-[0px_4px_17.4px_0px_#00000014] bg-white rounded-2xl">
        <div className="max-w-93.5 w-full text-center mx-auto ">
          <h1 className="text-black font-bold text-[32px] leading-[120%]">
            Sign up
          </h1>
          <p className="font-normal text-[16px] leading-[150%] text-mid-gray mt-2">
            Create your account to unlock access and stay updated with
            everything we offer.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mt-6">
            <input
              type="text"
              required
              placeholder="First name"
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />

            <button className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-3 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300">
              Sign up
            </button>
          </div>
        </form>
        <h3 className="text-[16px] font-normal leading-[150%] text-center mt-5 text text-dark-gray">
          Already a member?{" "}
          <Link to={"/Login"} className="underline">
            Log in{" "}
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default Signup;
