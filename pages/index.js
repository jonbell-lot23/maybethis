import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const songs = [
    {
      id: 1,
      text: "Grab a Seat",
      songURL: "http://sc.com",
      listOfMedia: ["one.png", "two.png", "three"],
    },
    {
      id: 3,
      text: "Pool Glare",
      songURL: "http://sc.com",
    },
    {
      id: 5,
      text: "Something's Up",
      songURL: "http://sc.com",
    },
    {
      id: 7,
      text: "Keys to the Armory",
      songURL: "http://sc.com",
    },
    {
      id: 9,
      text: "A Ritual Between Light and Dark",
      songURL: "http://sc.com",
    },
    {
      id: 11,
      text: "Viewridge",
      songURL: "http://sc.com",
    },
    {
      id: 13,
      text: "If Robots Had Lungs",
      songURL: "http://sc.com",
    },
    {
      id: 15,
      text: "Escalation",
      songURL: "http://sc.com",
    },
    {
      id: 17,
      text: "Patrick Swayze",
      songURL: "http://sc.com",
    },
    {
      id: 19,
      text: "Swaggering Towards the Threat",
      songURL: "http://sc.com",
    },
    {
      id: 21,
      text: "What People Are Saying",
      songURL: "http://sc.com",
    },
    {
      id: 23,
      text: "Destroyed Android",
      songURL: "http://sc.com",
    },
    {
      id: 25,
      text: "Because It Was Hard",
      songURL: "http://sc.com",
    },
    {
      id: 27,
      text: "F-12",
      songURL: "http://sc.com",
    },
    {
      id: 29,
      text: "Dropping Down Into the Sky",
      songURL: "http://sc.com",
    },
    {
      id: 31,
      text: "Maybe This",
      songURL: "http://sc.com",
    },
    {
      id: 33,
      text: "Take the Tunnel",
      songURL: "http://sc.com",
    },
    {
      id: 35,
      text: "Interrupt Switch",
      songURL: "http://sc.com",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Maybe This</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="w-full py-8 m-5 text-black h-1/2 rounded-xl">
          <h1 className="text-3xl font-bold">Maybe This</h1>
          <h2 className="font-medium text-blue-500 text-1xl">
            An Album by CLA-5
          </h2>

          <ol className="hidden mt-8 ml-8 list-decimal">
            <li> GrabASeat </li>
            <li> PoolGlare </li>
            <li> F12 </li>
            <li> InterruptSwitch </li>

            <li> SomethingsUp </li>
            <li> SwaggeringTowardsTheThreat</li>
            <li> BecauseItWasHard </li>
            <li> KeysToTheArmory </li>
            <li>Viewridge </li>
            <li>IfRobotsHadLungs </li>

            <li>ARitualBetweenLightAndDark </li>
            <li> Escalation </li>
            <li> Big Fight </li>
            <li>DestroyedAndroid </li>
            <li> WhatPeopleAreSaying </li>

            <li> Hum </li>

            <li> TakeTheTunnel </li>
            <li> DroppingDownIntoTheSky </li>
            <li> MaybeThis </li>
          </ol>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {[...Array(17)].map((_, i) => (
            <img key={i} src={`/${i + 1}.png`} style={{ width: "250px" }} />
          ))}
        </div>
      </>

      <div></div>
    </div>
  );
}
