import React from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Page = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecb9d20241msh7102207a58fc2ddp11af93jsn7db88459c16a",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  //   console.log(data);
  const main_data = data.titles;
  return (
    <>
    <section className={styles.movieSection}>
        <div className={styles.container}> 
      <h1> Series & Movies</h1>

      {main_data.map((curElem) => {
        return <MovieCard key={curElem.id} {...curElem} />;
      })} </div></section>
    </>
  );
};

export default Page;
