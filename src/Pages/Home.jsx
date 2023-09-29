import React, { useEffect } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const getAllUser = async () => {
    let URL = "http://localhost:5000/api/mobiles/";
    let res = await axios.get(URL);
    console.log("users", res.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
