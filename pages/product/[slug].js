import React from "react";
import { useRouter } from "next/router";

const Slug = ()=>{
    const router = useRouter(); 
    
    if(!router.isReady){
        return(
            <div>Loading........</div>
        );
    }
    
    const {slug} = router.query;//the slug is extracted from router.query this method is called destructuring.... 
    return(
            <>
            {slug}
            </>
        );
}

export default Slug; 