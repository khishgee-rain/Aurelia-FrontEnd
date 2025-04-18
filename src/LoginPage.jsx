import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import PayInfo from "./components/PayInfo";


const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();


if (emailOrPhone === "ADMIN" && password === "1234") {
  login("admin"); // 🎯 админ руу тохируулж байна
  navigate("/admin/panel");
  return;
}



    try {
      const response = await fetch("http://localhost:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailOrPhone,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log("Logged in user:", data);
        login();
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-32">
      <h2 className="text-3xl font-bold mb-6">LOGIN</h2>

      <form className="w-full max-w-md space-y-4 px-6 mt-10" onSubmit={handleLogin}>
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
        <div className="text-sm text-gray-400 text-right">
          Don't have an account?{" "}
          <Link to="/signup" className="hover:text-white">Sign up</Link>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400"
        >
          LOGIN
        </button>
      </form>

      <PayInfo />
    </div>
  );
};

export default LoginPage;
