import React from "react";
// import Navbar from "./navabr";
// import Footer from "./footer";
import Link from "next/link";
import product from "@/models/product";              
import mongoose from "mongoose";

const Product = ({product_variable}) => {
  return (
    <>
    {/* Adding navbar...... */}
    {/* <Navbar/> */}                                                
    {/* Adding body content.......... */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(product_variable).map((element)=>{                      
              return(
                <div key={product_variable[element]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-2xl hover:rounded-md">
                <div className="block relative h-48 rounded-2xl overflow-hidden">
                <Link passHref={true} href={product_variable[element].slug}><img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src={product_variable[element].img}
                /></Link>
              </div>
              <Link passHref={true} href={"http://localhost:3000/components/mackbook_info"}><div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product_variable[element].category}      
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product_variable[element].title}
                </h2>
                <p className="mt-1">{product_variable[element].price}</p>
                {/* {console.log(product_variable[element].size)} */}
                {product_variable[element].size.includes('14') || <span className="mt-1 border border-gray-300 px-1 hover:font-bold">14</span>}
                {product_variable[element].size.includes('16') || <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">16</span>}
                {product_variable[element].size.includes('18') || <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">18</span>}
                {product_variable[element].size.includes('21') || <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">21</span>}
                {product_variable[element].size.includes('23') || <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">23</span>}
                {product_variable[element].size.includes('24') || <span className="mt-1 mx-1 border border-gray-300 px-1 hover:font-bold">24</span>}
                
                <br />
                {product_variable[element].color.includes('grey') ||  <button className="border-2 border-gray-950 bg-gray-700 rounded-full w-6 h-6 focus:outline-none mt-1"></button>}
                {product_variable[element].color.includes('white') || <button className="border-2 border-gray-700 bg-gray-700 rounded-full w-6 h-6 focus:outline-none mt-1 mx-2"></button>}
                {product_variable[element].color.includes('lite yellow') || <button className="border-2 border-yellow-200 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>}
                {product_variable[element].color.includes('lite black') ||  <button className="border-2 border-yellow-300 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>}
                <button className="border-2 border-black bg-slate-200 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
                <button className="border-2 border-black bg-slate-400 rounded-full w-6 h-6 focus:outline-none mt-1 mx-1.5"></button>
              </div></Link>
              </div>           
              );                                           
            })}                                                 
              {/* <a className="block relative h-48 rounded overflow-hidden">
                <Link href={"http://localhost:3000/components/mackbook_info"}><img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image2.jpg"
                /></Link>
              </a>
              <Link href={"http://localhost:3000/components/mackbook_info"}><div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
                <p className="mt-1">size</p>
              </div></Link>        */}
            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-2xl">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image2.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image2.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image2.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image3.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image3.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image3.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block cursor-pointer"
                  src="\laptop_image3.jpg"
                />
              </a>
              <div className="mt-4 cursor-pointer hover:underline">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      <hr />  
      {/* Adding Footer....... */}
      {/* <Footer/> */}
    </>
  );
};

// using getServerSideProps function to fetch data from the api....
export async function getServerSideProps(context){
  if(mongoose.connections[0].readyState){
    
  }
  await mongoose.connect(process.env.MONGOOSE_URL)
  let product_variable = await product.find({category: "Apple Mackbook"});
  
  let mackbook_data = {}
  for(let item of product_variable){
    if(item._id in mackbook_data){
      if(!mackbook_data[item._id].color.includes(item.color) && item.availableQty>0){
        mackbook_data[item._id].color.push(item.color); 
      }
      if(!mackbook_data[item._id].size.includes(item.size) && item.availableQty>0){
        mackbook_data[item._id].size.push(item.size); 
      }
    }
    else{
      mackbook_data[item._id] = JSON.parse(JSON.stringify(item)); 
      if(item.availableQty > 0){
        mackbook_data[item._id].color = [item.color];
        mackbook_data[item._id].size = [item.size];  
      }
    }
  }

  return{
    // props: {product_variable: JSON.parse(JSON.stringify(product_variable))}
    props: {product_variable: JSON.parse(JSON.stringify(mackbook_data))}
  }
}

export default Product;