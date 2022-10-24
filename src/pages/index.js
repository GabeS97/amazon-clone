import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}


// Exporting this file tell next.js that this is no longer a static page
// Next.js will pre render this page on each request using the data returned by the function
export async function getServerSideProps(context) {
  const session = await getSession();
  const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json());

  return {
    props: {
      products,
      session
    }
  }
}

// https://fakestoreapi.com/products API endpoint for products
