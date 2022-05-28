import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function BookingForm() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/product/drink/pepsi");
  };
  console.log("router", router);
  return (
    <div>
      <p>This is booking hotel path</p>
      <Link href="https://www.facebook.com/">Go to Product</Link>
      <br />
      <br />
      <Link href="/product/drink/pepsi">Go to Product by A</Link>

      <button onClick={clickHandler}>Product Sub</button>
    </div>
  );
}

export default BookingForm;
