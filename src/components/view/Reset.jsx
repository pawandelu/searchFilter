import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  function handReset(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    passwordData.newPassword.trim() === "" ||
    passwordData.confirmPassword.trim() === ""
      ? alert("Please Fill All Fields")
      : passwordData.newPassword !== passwordData.confirmPassword
        ? alert("Passwords Do Not Match")
        : (localStorage.setItem(
            "user",
            JSON.stringify({
              ...savedUser,
              password: passwordData.newPassword,
            }),
          ),
          alert("password Reset SuccessFully"),
          navigate("/login"));
  }
  return (
    <section className="px-4 bg-off-white min-h-screen flex items-center">
      <div className="max-w-147.5 w-full mx-auto p-16 shadow-[0px_4px_17.4px_0px_#00000014] bg-white rounded-2xl">
        <div className="max-w-93.5 w-full text-center mx-auto ">
          <h1 className="text-black font-bold text-[32px] leading-[120%]">
            Reset password
          </h1>
          <p className="font-normal text-[16px] leading-[150%] text-mid-gray mt-2">
            Please enter new passoword
          </p>
        </div>
        <form onSubmit={handReset}>
          <div className="flex flex-col gap-3 mt-6">
            <input
              type="password"
              required
              placeholder="New password"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  newPassword: e.target.value,
                })
              }
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />

            <input
              type="password"
              required
              placeholder="Confirm password"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,
                  confirmPassword: e.target.value,
                })
              }
              className="bg-light-white text-dark-gray font-normal text-[16px] leading-[150%] w-full p-3.5 rounded-lg outline-none"
            />

            <button
              type="submit"
              className="font-bold text-[16px] leading-[100%] border py-4 bg-navy-blue text-white rounded-lg w-full mt-3 cursor-pointer hover:text-navy-blue hover:bg-white hover:border-navy-blue transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reset;
