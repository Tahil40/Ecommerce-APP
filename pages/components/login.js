import React,{useState} from "react";
import Link from "next/link";
import Router from "next/router";

const Login = () => {
  const[email, set_email] = useState(''); 
  const[password, set_password] = useState(''); 

  const handle_change = (e)=>{
    if(e.target.name=="email"){
      set_email(e.target.value); 
    }
    else if(e.target.name=="password"){
      set_password(e.target.value); 
    }
  }

  const handle_submit = async(e)=>{
    e.preventDefault(); 
    const data = {email, password}
    const res = await fetch('http://localhost:3000/api/sign_in', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify(data)
    });
    let response = await res.json(); 
    if(response.success){
      Router.push('http://localhost:3000');
      localStorage.setItem("token", response.token);
    }
    else{
      console.log("logged out"); 
      Router.push('http://localhost:3000/components/login');
    }

    set_email(''); 
    set_password(''); 
  }

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handle_submit}>
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
                  value={email}
                  onChange={handle_change}
                  autoComplete="email"
                  required
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
                  value={password}
                  onChange={handle_change}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-1"
                />
              </div>
              <div className="text-right my-2">
                  <Link
                    href={"http://localhost:3000/components/forget_password"}
                    className="font-bold text-blue-900 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center border-2 rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handle_submit}>
                Sign in
              </button>
            </div>
            <div className="text-left my-3">
                  <Link
                    href={"http://localhost:3000/components/signup"}
                    className="font-bold text-blue-900 hover:underline"
                  >
                    Click Here </Link> - To Create Account If Don't Have Account
            </div>      
          </form>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Login;