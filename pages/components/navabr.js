import React,{useState} from "react";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import { useRef } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({cart, add_to_cart, remove_from_cart, clear_cart, total, user}) => {
  const [dropdown, set_dropdown] = useState(false);
  const toggle_cart = () => {
    // console.log(ref);
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  // console.log(cart);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-10">
        <div className="logo mx-2 my-2">
          <Image
            width={130}
            height={30}
            src="/amazon-icon.webp"
            alt="Loading..."
          />
        </div>
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"http://localhost:3000/"}>
            <li className="hover:text-yellow-600">Home</li>
          </Link>
          <Link href={"/components/mackbook"}>
            <li className="hover:text-yellow-600">MackBook</li>
          </Link>
          <Link href={"/components/gaming_pc"}>
            <li className="hover:text-yellow-600">Gaming CPU</li>
          </Link>
          <Link href={"/components/gaming_laptop"}>
            <li className="hover:text-yellow-600">Gaming Laptop</li>
          </Link>
          <Link href={"/components/gaming_mouse_keyboard"}>
            <li className="hover:text-yellow-600">Gaming Mouse and Keyboard</li>
          </Link>
          <Link href={"/components/gaming_headset"}>
            <li className="hover:text-yellow-600">Gaming Headset</li>
          </Link>
          <Link href={"/components/earbuds"}>
            <li className="hover:text-yellow-600">Earbuds</li>
          </Link>
        </ul>

        <div className="cart absolute right-0 mx-5 cursor-pointer flex">
          {/* Adding account icon.... */}
            {user.value && <MdAccountCircle className="mx-4 text-3xl" onMouseOver={()=>{set_dropdown(true)}} onMouseLeave={()=>{set_dropdown(false)}}/>}
            
            <Link href={"http://localhost:3000/components/login"}>
            {!user.value && <button className="mr-3 bg-black px-3 py-1 text-white font-thin rounded-md border-2 hover:bg-white hover:text-black hover:border-black">Login</button>}
            </Link>

            {/* <a onMouseOver={()=>{set_dropdown(true)}} onMouseLeave={()=>{set_dropdown(false)}}> */}
            {dropdown && <div className="absolute right-4 bg-white my-7 mr-10 shadow-md py-2 px-4 text-black font-bold rounded-md">
              <ul>  
                <li className="hover:text-yellow-700 my-1">Orders</li>
                <li className="hover:text-yellow-700 my-1">Account</li>
                <li className="hover:text-yellow-700 my-1">SellOnline</li>
                <li className="hover:text-yellow-700 my-1">Logout</li>
              </ul>
            </div>}
            {/* </a> */}
      
          {/* Adding cart icon.... */}
          <TiShoppingCart
            onClick={toggle_cart}
            className="text-4xl md:text-3xl"
          />
        </div>

        <div
          ref={ref}//the DOM of this div is passed to the ref variable which is used to toggle the cart....
          className={`w-100 h-[100vh] sidecart overflow-y-scroll absolute top-0 right-0 bg-white shadow-2xl p-10 transform transition-transform translate-x-full ${Object.keys(cart).length!==0 ?'translate-x-0':'translate-x-full'}`}
        >
          <h1 className="font-bold text-2xl text-center">Shooping Cart</h1>
          <span className="absolute top-3 right-3 cursor-pointer text-2xl">
            <IoMdCloseCircle onClick={toggle_cart} />
          </span>
          <hr className="my-2" />
          <ul className="list-decimal mx-2">
            {/* showing all list items using map function........ */}
            {Object.keys(cart).length==0 && <div className="text-center font-bold my-5">No Item in your Cart!</div>}
            {Object.keys(cart).map((unique_key)=>{
              return <li key={unique_key} className="my-3">    
              <div className="flex">
                <div className="w-1/2 px-2 items-center justify-center font-semibold mx-3">
                  {cart[unique_key].name}
                </div>
                <div className="w-1/3 items-center justify-center font-semibold text-2xl mx-2 flex">
                  <AiFillPlusCircle className="mx-2 cursor-pointer" onClick={add_to_cart}/> {cart[unique_key].quantity}{" "}
                  <AiFillMinusCircle className="mx-2 cursor-pointer" onClick={remove_from_cart}/>
                </div>
              </div>
            </li>
            })}
          </ul>
          <div className="flex">
            <Link href={"http://localhost:3000/components/checkout"}><button
              className="flex mx-3 mt-16 text-white bg-black border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black
                hover:outline-4 rounded-3xl text-lg hover:border-black"
            disabled={Object.keys(cart).length==0}>                                                               
              <IoBagCheckOutline className="m-1" />
              Checkout
            </button></Link>

            <button
              className="flex mx-3 mt-16 text-white bg-black border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black
                hover:outline-4 rounded-3xl text-lg hover:border-black"
            onClick={clear_cart} disabled={Object.keys(cart).length==0}>
              <IoBagCheckOutline className="m-1" />
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;