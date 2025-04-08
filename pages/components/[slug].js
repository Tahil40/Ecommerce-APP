import React from "react";
import { useRouter } from "next/router";

export default function Slug(){
    let router_variable = useRouter(); 
    return(
        <>
        {router_variable.query.slug}
        </>
    );
}