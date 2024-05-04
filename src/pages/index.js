import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div lang="en">
      <Head>
        <title>
          Otipy: Buy Online Farm Fresh Fruits & Vegetables, Dairy Products,
          Groceries & More
        </title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#4285f4" />
        <meta
          name="description"
          content="Order online farm-fresh fruits, veggies, dairy products (milk, bread, eggs), groceries & more on Otipy. Order by 12:00 AM & get delivery by morning 08:00 AM, Lowest price."
        />
        <link rel="icon" href="/icon.svg" />{" "}
        <link rel="manifest" href="../manifest.json" />
      </Head>
    </div>
  );
}
