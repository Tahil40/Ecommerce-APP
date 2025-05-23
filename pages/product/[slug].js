import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import product from "@/models/product";
import mongoose from "mongoose";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Slug = () => {
  const router = useRouter();

  if (!router.isReady) {
    return <div>Loading........</div>;
  }

  const [pincode, set_pincode] = useState();
  const [service, set_service] = useState();
  // creating method to check the pincode functionality........
  const check_pincode = async () => {
    const data = await fetch("http://localhost:3000/api/pincode");
    const data_parsed = await data.json();

    if (data_parsed.includes(parseInt(pincode))) {
      set_service(true);
      toast("🦄 The Pincode is Servicable", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      set_service(false);
      toast("🦄 Sorry, This Pincode is not Servicable", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const on_change = (e) => {
    set_pincode(e.target.value);
  };

  const { slug } = router.query; //the slug is extracted from router.query this method is called destructuring....
  return (
    <>
      <hr />
      {/* Adding main body...... */}
      <section className="text-black bg-white body-font overflow-hidden">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <ToastContainer />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/laptop_image2.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-black text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {/* <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                  <button className="border-2 border-gray-950 bg-gray-700 rounded-full w-6 h-6 focus:outline-none mt-1"></button>
                  <button className="border-2 border-gray-700 bg-gray-700 rounded-full w-6 h-6 focus:outline-none mt-1 mx-2"></button>
                  <button className="border-2 border-yellow-200 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                  <button className="border-2 border-yellow-300 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                  <button className="border-2 border-black bg-slate-200 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                  <button className="border-2 border-black bg-slate-400 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border border-gray-700 focus:ring-2 focus:ring-black bg-transparent appearance-none py-2 focus:outline-none focus:border-black text-black pl-3 pr-10">
                      <option>14</option>
                      <option>16</option>
                      <option>18</option>
                      <option>21</option>
                      <option>23</option>
                      <option>24</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font mx-2 font-medium text-2xl text-black">
                  $58.00
                </span>
                <Link href={"http://localhost:3000/components/order"}>
                  <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                    Buy
                  </button>
                </Link>
                <button
                  className="flex mx-2 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                  onClick={() => {
                    add_to_cart(1, 1, 500, "wear the code", "XL", "Red");
                  }}
                >
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-black p-0 border-0 inline-flex items-center justify-center text-white hover:bg-white hover:text-black ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <br />
              <div className="flex">
                <input
                  type="text"
                  className="text-black px-2 border-2 hover:border-black"
                  placeholder="Pincode"
                  onChange={on_change}
                />
                <button
                  className="bg-black text-white mx-4 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded"
                  onClick={check_pincode}
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry ! we do not deliver to this pincode yet
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  Yey! the Pincode is Servicable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <hr />
      {slug}
    </>
  );
};

// Using server side props method............
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGOOSE_URL);
  }
  let product_data = await product.findOne({ slug: "" });
  // console.log(context);

  return {
    props: {},
  };
}

export default Slug;
