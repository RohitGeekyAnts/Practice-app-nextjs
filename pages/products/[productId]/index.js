// import React from "react";
// import { useRouter } from "next/router";

// const ProductId = () => {
//   const router = useRouter();

//   const { productId } = router.query;
//   if (!productId) return <div>Loading...</div>;
//   return <div>ProductId : {productId}</div>;
//   //   return productId ? <div>ProductId : {productId}</div> : <div>Loading...</div>;
// };

// export default ProductId;

// pages/product/[id].js
import { useRouter } from "next/router";

export default function ProductPage({ product }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  // Handle loading state when fallback is enabled
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <br></br>
      <h4>{product.description}</h4>
      <br></br>
      <p>Price: ${product.price}</p>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: true }; // Enable fallback for on-demand rendering
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const product = await res.json();

  return { props: { product } };
}
