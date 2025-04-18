import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PayInfo from "./components/PayInfo";

const SignUpPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3003/signup", {
        email: emailOrPhone,
        name: "Anonymous", 
        password,
      });
      alert("Signup successful!");
      navigate("/login"); 
    } catch (err) {
      alert("Signup failed. Email may already exist.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 mt-[30px]">
      <h2 className="text-3xl font-bold mb-6">SIGN UP</h2>
      <form className="w-full max-w-md space-y-4 px-6" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-white text-black"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-white text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repeat your password"
          className="w-full px-4 py-2 rounded bg-white text-black"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <div className="text-sm text-gray-400 text-right">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-white">Login</Link>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400"
        >
          SIGN UP
        </button>
      </form>
      <div className="mt-12 w-full">
        <PayInfo />
      </div>
    </div>
  );
};

export default SignUpPage;
