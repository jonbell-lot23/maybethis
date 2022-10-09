import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";

const list = [
  "https://res.cloudinary.com/djp21wtxm/image/upload/v1656385240/i1600x842-SU6DLdzOL8cx_vieu5m.png",
  "https://res.cloudinary.com/djp21wtxm/image/upload/v1656385400/i1600x534-gQXrSMkHUzzZ_hpzdoj.png",
];

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>I did it 2</div>
      {list.map((item) => (
        <img className="h-12" src={item} alt="images lol" />
      ))}
    </>
  );
}
