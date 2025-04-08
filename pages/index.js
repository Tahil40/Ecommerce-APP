import React from "react";
import Head from "next/head";
// import Footer from "./components/footer";
import styles from "@/styles/amazon.module.css";
// import Navbar from "./components/navabr";
import Amazon_home from "./components/body";

export default function Home() {
  return (
    <>        
   <Head>
    <title>Amazone Store - Buy The Best Products</title>
    <meta name="description" content="Amazon Store Buy the best quality products at good prices...." />
    <link rel="icon" href="/amazon_icon.webp" />
   </Head>

   {/* Adding navbar.......*/}
   {/* <Navbar/> */}

    <br />
    {/* Adding front page image........ */}
    <div className={styles.front_image}>
      <img src="laptop_image1.jpg" alt="Loading....." style={{width:"600px"}}/>
    </div>

    {/* Adding front page body...... */}
    <Amazon_home/>

    <hr />
    {/* Adding footer...... */}
    {/* <Footer/> */}

   </>
  );
}
