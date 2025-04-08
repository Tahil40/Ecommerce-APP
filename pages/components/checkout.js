import React, {useState} from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";

const Checkout = ({
  cart,
  add_to_cart,
  remove_from_cart,
  clear_cart,
  total,
}) => {
  const[name, set_name] = useState(''); 
  const[email, set_email] = useState(''); 
  const[phone, set_phone] = useState(''); 
  const[pincode, set_pincode] = useState(''); 
  const[address, set_address] = useState(''); 
  const[state, set_state] = useState('');
  const[city, set_city] = useState(''); 
  const[disabled, set_disabled] = useState(true); 

  const handle_change = (e)=>{
    if(e.target.name=='name'){
      set_name(e.target.value); 
    }
    else if(e.target.name=='email'){
      set_email(e.target.value); 
    }
    else if(e.target.name=='phone'){
      set_phone(e.target.value); 
    }
    else if(e.target.name=='pincode'){
      set_pincode(e.target.value); 
    }
    else if(e.target.name=='address'){
      set_address(e.target.value); 
    }
    else if(e.target.name=='state'){
      set_state(e.target.value); 
    }
    else if(e.target.name=='city'){
      set_city(e.target.value); 
    }
    setTimeout(() => {
      if(name.length>=3 && email.length>3 && phone.length>3 && pincode.length>3 && state.length>=3 && city.length>=3 && address.length>3){
        set_disabled(false);
      }
      else{
        set_disabled(true);
      }
    }, 500);
  }

  const initiate_payment = () => {
    let transaction_tocken;
    let amount;
    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: Math.floor(Math.random() * Date.now()) /* update order id */,
        token: transaction_tocken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: amount /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };
    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
          })
          .catch(function onError(error) {
            console.log("error => ", error);
          });
      });
    }
  };

  return (
    <>
      <div className="m-auto">
        <h1 className="text-center font-bold my-4 text-3xl">Checkout</h1>
        {/* <h2 className="font-bold mx-2">Delivery Details</h2> */}
        <h3 className="text-gray-900 text-center mb-1 font-bold title-font">
          Delivery Details - Fill Below Form
        </h3>

        {/* Adding delivery form.....*/}
        <div className="mx-auto flex">
          <div className="px-10 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-10 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                id="name"
                name="phone"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                State
              </label>
              <input
                type="email"
                id="email"
                name="state"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-10 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="name"
                name="city"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Pincode
              </label>
              <input
                type="email"
                id="email"
                name="pincode"
                onChange={handle_change}
                className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Adding address input tag.... */}
      <div className="relative mb-4 px-10">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          id="message"
          name="address"
          onChange={handle_change}
          className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black h-15 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>

      {/* Reviewing card details....... */}
      <div className="w-100 h-[30vh] bg-white p-10">
        <h1 className="font-bold text-2xl text-center">Review Shooping Cart</h1>
        <hr className="my-2" />
        <ul className="list-decimal mx-2">
          {/* showing all list items using map function........ */}
          {Object.keys(cart).length == 0 && (
            <div className="text-center font-bold my-5">
              No Item in your Cart!
            </div>
          )}
          {Object.keys(cart).map((unique_key) => {
            return (
              <li key={unique_key} className="my-3">
                <div className="flex">
                  <div className="w-1/2 px-2 items-center justify-center font-semibold mx-3">
                    {cart[unique_key].name}
                  </div>
                  <div className="w-1/3 items-center justify-center font-semibold text-2xl mx-2 flex">
                    <AiFillPlusCircle
                      className="mx-2 cursor-pointer"
                      onClick={add_to_cart}
                    />{" "}
                    {cart[unique_key].quantity}{" "}
                    <AiFillMinusCircle
                      className="mx-2 cursor-pointer"
                      onClick={remove_from_cart}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Adding Submit button....*/}
      <div className="flex text-center">
        <div className="font-bold mx-4">Total Price - {total}</div>
        <Link href={"http://localhost:3000/components/order"}>
          <button
            className="flex mx-3 my-3 mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black
                hover:outline-4 rounded disabled:bg-gray-500 disabled:text-gray-400"
            onClick={initiate_payment}
          disabled={disabled}>
            Buy
          </button>
        </Link>

        <button
          className="flex mx-3 my-3 mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black
                hover:outline-4 rounded disabled:bg-gray-500 disabled:text-gray-400"
          onClick={clear_cart}
          disabled={disabled}>
          <IoBagCheckOutline className="m-1" />
          Clear cart
        </button>
      </div>

      <hr />
    </>
  );
};

export default Checkout;
