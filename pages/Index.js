import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 text-center p-8 text-white rounded-xl m-12 text-gray-600">
        <h1>Template!</h1>
      </div>
    </div>
  );
}
