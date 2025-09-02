import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      const res = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if(data){
        toast("user Signedup in", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce, 
    });
        navigate("/login")
      }
      else{
        console.log("some error in parsing data")
      }
    } catch (err) {
      console.error("Error:", err);
      toast("Something went wrong", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce, 
    });
     
    }
  };

  return (
    <div className="flex  items-center justify-center min-h-screen ">
      <div className=" bg-white p-6 rounded-lg shadow-md w-96">
      <h1 className=" flex items-center justify-center text-3xl text-shadow-sky-600 text-">Sign<span className="text-3xl text-blue-500">-Up</span></h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 rounded"
          required
        />

        <label htmlFor="email" className="font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 rounded"
          required
        />

        <label htmlFor="password" className="font-semibold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
