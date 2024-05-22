import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img
          src="https://cdn.britannica.com/87/138787-050-33727493/Belovezhskaya-Forest-Poland.jpg"
          alt="Beautiful forest"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-md rounded">
          <h2 className="text-3xl font-bold mb-4">Sign In</h2>
          <p className="mb-6 text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create now
            </a>
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input mt-1 block w-full border rounded py-2 px-3"
              required
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="keepSignedIn"
                name="keepSignedIn"
                className="mr-2"
              />
              <label htmlFor="keepSignedIn" className="text-gray-700">
                Keep me signed in
              </label>
            </div>
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 mb-4"
          >
            Sign In
          </button>
          <div className="flex items-center justify-center mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <button
            type="button"
            className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded w-full hover:bg-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
