import { useRouter } from "next/router";
import React from "react";

function SubProduct() {
  const router = useRouter();

  console.log("route", router);
  return (
    <div>
      <p>you are in path name: {router.pathname}</p>
      <p>dynamic query value: {router.query.productId}</p>
    </div>
  );
}

export default SubProduct;
