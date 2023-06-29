import type { NextPage } from "next";
import React from "react";
import s from "./index.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";
import { ContactForm } from "../components/commons/Form";

const Home: NextPage = () => {
  function createStoryHandler(event: React.FormEvent) {
    event.preventDefault();
    alert("OK");
  }

  return (
<></>
  );
};

export default Home;
