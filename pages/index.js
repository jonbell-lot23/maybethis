import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as Songs from "./Songs.js";
import GrabASeat from "./songs/GrabASeat.mdx";
import PoolGlare from "./songs/PoolGlare.mdx";
import SomethingsUp from "./songs/SomethingsUp.mdx";
import KeysToTheArmory from "./songs/KeysToTheArmory.mdx";
import ARitualBetweenLightAndDark from "./songs/ARitualBetweenLightAndDark.mdx";
import Viewridge from "./songs/Viewridge.mdx";
import IfRobotsHadLungs from "./songs/IfRobotsHadLungs.mdx";
import Escalation from "./songs/Escalation.mdx";
import SwaggeringTowardsTheThreat from "./songs/SwaggeringTowardsTheThreat.mdx";
import WhatPeopleAreSaying from "./songs/WhatPeopleAreSaying.mdx";
import DestroyedAndroid from "./songs/DestroyedAndroid.mdx";
import BecauseItWasHard from "./songs/BecauseItWasHard.mdx";
import F12 from "./songs/F12.mdx";
import DroppingDownIntoTheSky from "./songs/DroppingDownIntoTheSky.mdx";
import MaybeThis from "./songs/MaybeThis.mdx";
import TakeTheTunnel from "./songs/TakeTheTunnel.mdx";
import InterruptSwitch from "./songs/InterruptSwitch.mdx";


import Hum from "./songs/Hum.mdx";
import BigFight from "./songs/BigFight.mdx";
import Plodding from "./songs/Plodding.mdx";

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
        <div className="h-1/2 w-full rounded-xl py-8 m-5 text-black">
          <h1 className="text-3xl font-bold">Maybe This</h1>
          <h2 className="text-1xl font-medium text-blue-500">
            An Album by Enthusiastic Panther
          </h2>

          <ol class="list-decimal mt-8 ml-8">
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

        <GrabASeat />
        <PoolGlare />
        <F12 />
        <InterruptSwitch />
        
        <SomethingsUp />
        <SwaggeringTowardsTheThreat />
        <BecauseItWasHard />        
        <KeysToTheArmory />
        <Viewridge />
        <IfRobotsHadLungs />
        
        <Plodding />
        <ARitualBetweenLightAndDark />
        <Escalation />
        <BigFight />
        
        
        
        <DestroyedAndroid />
        
        <WhatPeopleAreSaying />
        <Hum />
        <TakeTheTunnel />
        
        <DroppingDownIntoTheSky />
        <MaybeThis />

        
      </>

      <div></div>
    </div>
  );
}
