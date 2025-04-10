import React from "react";
import { useRouter } from "next/router";

export default function Slug({ add_to_cart }) {
  let router_variable = useRouter();
  
  return (
    <>
      {router_variable.query.slug}
    </>
  );
}