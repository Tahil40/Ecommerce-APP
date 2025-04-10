import "@/styles/globals.css";
import {useState, useEffect} from "react";
import Navbar from "./components/navabr";
import Footer from "./components/footer";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar';

export default function App({ Component, pageProps }) {
  const [cart, set_cart] = useState({});
  const [total, set_total] = useState(0); 
  const [user, set_user] = useState({value: null}); 
  const [key, set_key] = useState(0);
  const[progress, set_progress] = useState(0);
  const router = useRouter(); 
  
  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
      set_progress(50);  
    });
    router.events.on('routeChangeComplete', ()=>{
      set_progress(100);
    });
    // set_progress(100);
    try{
      if(localStorage.getItem("cart")){
        set_cart(JSON.parse(localStorage.getItem("cart")));
      }
    }catch(error){
      localStorage.clear(); 
    }
    const token = localStorage.getItem('token');
    if(token){
      set_user({value: token}); 
      set_key(Math.random());
    }
  }, []);

  //create a function to save the user's cart......
  const save_cart = (cart_variable_params)=>{
    localStorage.setItem("cart", cart_variable_params);//saving cart to localstorage.... 
    let total_variable = 0; 
    let keys_variable = Object.keys(cart);//getting keys from the cart.... 
    for (let i = 0; i < keys_variable.length; i++) {
     total_variable += cart_variable_params[keys_variable[i]].price * cart_variable_params[keys_variable[i]].quantity;
    }
    set_total(total_variable);
  }
       
  const add_to_cart = (item_code, quantity, price, name, size, variant)=>{
    let cart_variable = cart;//assign cart object to cart_variable.... 
    if(item_code in cart){//check if the cart have product with this item_code if yes then we just have to increase it's quantity because in cart no two same items save.... 
      cart_variable[item_code].quantity = cart[item_code].quantity + quantity
    } 
    else{ 
      cart_variable[item_code] = {quantity, price, name, size, variant}
    }
    set_cart(cart_variable);
    save_cart(cart_variable);
  }
  
  const clear_cart = ()=>{
    set_cart({});
    save_cart({});
  }

  const remove_from_cart = (item_code, quantity, price, name, size, variant)=>{
    let cart_variable1 = cart; 
    if(item_code in cart){
      cart_variable1[item_code].quantity = cart_variable1[item_code].quantity - quantity
    }
    else{
      cart_variable1[item_code] = {item_code, quantity, price, name, size, variant}
    }

    if(cart_variable1[item_code].quantity<=0){
      delete cart_variable1[item_code]; 
    }

    set_cart(cart_variable1); 
    save_cart(cart_variable1); 
  }

  const buy_now = (item_code, quantity, price, name, size, variant)=>{
    let cart_variable = {item_code: {quantity: 1, name, size, variant, price}}; 
    // if(item_code in cart){
    //   cart_variable[item_code].quantity = cart[item_code].quantity + quantity
    // } 
    // else{
    //   cart_variable[item_code] = {quantity, price, name, size, variant}
    // }
    set_cart(cart_variable);
    save_cart(cart_variable);
    router.push('/checkout'); 
  }
                 
  return <>
      {/*Layout of the website....*/}
     <Navbar cart={cart} add_to_cart={add_to_cart} remove_from_cart={remove_from_cart} clear_cart={clear_cart} total={key} user={user}/>
     {/* Adding top loading bar......... */}
     <LoadingBar
        color='#f16c19'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => set_progress(0)}
      />
     <Component cart={cart} add_to_cart={add_to_cart} remove_from_cart={remove_from_cart} clear_cart={clear_cart} total={total} buy_now={buy_now} {...pageProps} />
     <Footer/>
     </>;
}