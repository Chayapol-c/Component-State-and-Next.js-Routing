import type { NextPage } from "next";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import Head from "next/head";

const HomeContainer = styled.div`
  position: relative;
  padding: 0 0 2rem 0;
  .banner {
    margin: 0 0 3rem 0;
  }

  .slick-dots li button:before {
    font-size: 8px;
  }
`;

const Home: NextPage = () => {
  const [products, setProducts] = useState([]);
  const url =
    "https://asia-southeast1-muze-academy.cloudfunctions.net/products";

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(url);
      const data = await res.data;
      setProducts(data.items);
    };
    fetchProduct();
  }, []);

  return (
    <HomeContainer>
      <Head>Home</Head>
      <div className="banner">
        <Banner />
      </div>
      <ProductCard data={products} />
    </HomeContainer>
  );
};

export default Home;
