import React, { useState } from "react";
import { useRouter } from "next/router";

const Sign_up = () => {
  const [username, set_username] = useState();
  const [email, set_email] = useState();
  const [password, set_password] = useState();
  const router = useRouter();

  const handle_change = (e) => {
    if (e.target.name == "username") {
      set_username(e.target.value);
    } else if (e.target.name == "email") {
      set_email(e.target.value);
    } else if (e.target.name == "password") {
      set_password(e.target.value);
    }
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    const data = { username, email, password };
    let res = await fetch("http://localhost:3000/api/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    if (response.success) {
      set_username("");
      set_email("");
      set_password("");
      router.push("/components/login");
    } else {
      //show toast here.....
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/amazon_icon.webp"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Amazon Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handle_submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UserName
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="username"
                  type="name"
                  value={username || ""}
                  autoComplete="email"
                  onChange={handle_change}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email || ""}
                  autoComplete="email"
                  required
                  onChange={handle_change}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password || ""}
                  autoComplete="current-password"
                  required
                  onChange={handle_change}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password || ""}
                  onChange={handle_change}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center border-2 rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handle_submit}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sign_up;
