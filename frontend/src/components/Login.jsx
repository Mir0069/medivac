import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useauth } from "../contextproviders/authcontext";
import { Context } from "../App";
import { useContext } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
const Login = () => {

        const [signedin, setsignedin] = useContext(Context)
    console.log(signedin)
        
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if(data){
        setsignedin(true)
        console.log(signedin)
        console.log(data.token)
        localStorage.setItem('userd',data.token)
        toast.success('user logged in',{
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

         navigate("/dashboard")

      }
      else{
        console.log("some error in parsing data")
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };
  
  return (
    <div className="flex  items-center justify-center min-h-screen ">
      <div className=" bg-white p-6 rounded-lg shadow-md w-96">
      <h1 className=" flex items-center justify-center text-3xl text-shadow-sky-600 text-">Log<span className="text-3xl text-blue-500">-In</span></h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
       

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

export default Login;
