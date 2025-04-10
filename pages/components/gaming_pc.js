import React from "react";
import Link from "next/link";
import product from "@/models/product";
import mongoose from "mongoose";

const Gaming_pc = ({product_props}) => {
  return (
    <>
      {/* Adding body content.......... */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {product_props.map((element)=>{
              return(
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-2xl hover:rounded-md">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Link href={"http://localhost:3000/product/gaming_pc_info"}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block cursor-pointer"
                      src={element.img}
                    />
                  </Link>
                </a>
                <Link href={"http://localhost:3000/product/gaming_pc_info"}>
                  <div className="mt-4 cursor-pointer hover:underline">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {element.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {element.title}
                    </h2>
                    <p className="mt-1">{element.price}</p>

                    <span className="mt-1 border border-gray-300 px-1 hover:font-bold">16</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">18</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">21</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">23</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">24</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">27</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">40</span>
                    <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">50</span>

                    <button className="border-2 border-yellow-200 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none mt-1 "></button>
                    <button className="border-2 border-yellow-300 bg-yellow-300  rounded-full w-6 h-6 focus:outline-none mt-1 mx-2"></button>
                    <button className="border-2 border-pink-900 bg-pink-800 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                    <button className="border-2 border-black bg-black rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                    <button className="border-2 border-gray-500 bg-gray-500 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                    <button className="border-2 border-black bg-white rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                    <button className="border-2 border-green-950 bg-green-900 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                    <button className="border-2 border-blue-900 bg-blue-700 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>

                  </div>
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

// using server side rendering................
export async function getServerSideProps(context){
  if(mongoose.connections[0].readyState){

  }
  await mongoose.connect(process.env.MONGOOSE_URL); 
  let product_data = await product.find({category: "Gaming CPU"});

  return{
    props:{product_props: JSON.parse(JSON.stringify(product_data))}
  }
};

export default Gaming_pc;
