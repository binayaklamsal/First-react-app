import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputField((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const validation = (value) => {
    let err = {};
    if (!value?.name) {
      err = { ...err, name: "Name required!" };
    }
    if (!value?.email) {
      err = { ...err, email: "email required!" };
    }

    if (!value?.password) {
      err = { ...err, password: "Password required!" };
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(inputField));
    setIsValidate(true);
  };
  useEffect(() => {
    if (error && Object.keys(error).length === 0 && isValidate) {
      console.log("okay", inputField);
    }
  }, [error, isValidate]);

  return (
    <div className="bg-[#2596be] w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#e9f5f9] w-full m-2 !max-w-[400px] p-10 rounded-md shadow-lg flex flex-col justify-center"
      >
        <h1 className="font-bold text-2xl">Sign Up</h1>
        <p className="py-2">Fill your credentials to register.</p>

        <div className="my-4 flex flex-col gap-4">
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Full Name:
            </label>
            <input
              onChange={handleChange}
              value={inputField?.name}
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{error?.name}</p>
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Email:
            </label>
            <input
              onChange={handleChange}
              value={inputField?.email}
              type="email"
              name="email "
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{error?.email}</p>
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              onChange={handleChange}
              value={inputField?.password}
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{error?.password}</p>
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password:
            </label>
            <input
              onChange={handleChange}
              value={inputField?.password}
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{error?.password}</p>
          </div>
        </div>

        <button className="bg-[#134b5f] hover:bg-[#66b6d2] text-white font-bold py-2 px-4 rounded-md my-1 w-full">
          Sign up
        </button>
        <div>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            SignIn
          </Link>
        </div>

        <div className="space-y-3">
          Back to <Link to="/" className="text-blue-500">Home</Link>!
        </div>
      </form>
    </div>
  );
};

export default Signup;
