import React, {useEffect} from "react";
import { useRouter } from "next/router";

const Accounts = ()=>{
    const router = useRouter();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            router.push('http://localhost:3000');
        }
    }, [])
    return(
        <>
                  
        <hr />
        </>
    );
}

export default Accounts; 