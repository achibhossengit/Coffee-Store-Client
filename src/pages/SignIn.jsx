import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { email } = useContext(AuthContext);
  console.log(email);
  const handleSignin = (e) => {
    e.preventDefault();
    console.log("sign in clicked");
  };
  return (
    <div className="flex justify-center items-center min-h-[70vh] w-full bg-base-100 px-4">
      <div className="w-full max-w-md p-8 shadow-xl rounded-2xl bg-base-200">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Login to Your Account
        </h1>
        <form className="space-y-5" onSubmit={handleSignin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <a href="/signup" className="text-blue-600 hover:underline ml-1">
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
