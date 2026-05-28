import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.getItem("isLogin") ? navigate("/card") : null;
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    const saveUesr = JSON.parse(localStorage.getItem("user"));

    !saveUesr
      ? alert("Plese signup First")
      : saveUesr.email !== loginData.email
        ? alert("Invailed Email")
        : saveUesr.password !== loginData.password
          ? alert("Invailed Password")
          : (alert("Login Successfully"),
            localStorage.setItem("isLogin", true),
            navigate("/card"));
  }

  return (
    <section className="px-4 bg-off-white min-h-screen flex items-center">
      <div className="max-w-147.5 w-full mx-auto p-16 shadow-[0px_4px_17.4px_0px_#00000014] bg-white rounded-2xl">
        <div className="max-w-93.5 w-full text-center mx-auto ">
          <h1 className="text-black font-bold text-[32px] leading-[120%]">
            Welcome back!
          </h1>
          <p className="font-normal text-[16px] leading-[150%] text-mid-gray mt-2">
            Log in below to access your account and keep things running
            smoothly.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-3 mt-6">
            <input
              type="email"
              required
              placeholder="Email address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />
            <h2 className="font-medium text-[16px] leading-[150%] text-end underline text-dark-gray cursor-pointer">
              <Link to={"/forget"}>Forgot password?</Link>
            </h2>
            <button
              type="submit"
              className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-3 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300"
            >
              Log in
            </button>
          </div>
        </form>
        <h3 className="text-[16px] font-normal leading-[150%] text-center mt-5 text text-dark-gray">
          Don’t have an account?{" "}
          <Link to={"/"} className="underline">
            Create account
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default Login;
