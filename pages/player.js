import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AudioPlayer from "../components/AudioPlayer";

export default function Home() {
  const songs = [
    {
      id: 1,
      text: "Grab a Seat",
      songURL: "/mp3s/1-Grab_a_Seat.m4a",
      imageURL: "/1.png",
    },
    {
      id: 2,
      text: "Lisa Unwinds",
      songURL: "/mp3s/2-Lisa_Unwinds.m4a",
      imageURL: "/2.png",
    },
    {
      id: 3,
      text: "Used to This",
      songURL: "/mp3s/3-Used_to_This.m4a",
      imageURL: "/3.png",
    },
    {
      id: 4,
      text: "Interrupt Switch",
      songURL: "/mp3s/4-Interrupt_Switch.m4a",
      imageURL: "/4.png",
    },
    {
      id: 5,
      text: "Reporting Live",
      songURL: "/mp3s/5-Reporting_Live.m4a",
      imageURL: "/5.png",
    },
    {
      id: 6,
      text: "I Guess Now We Fight",
      songURL: "/mp3s/6-I_Guess_Now_We_Fight.m4a",
      imageURL: "/6.png",
    },
    {
      id: 7,
      text: "Because It Was Hard",
      songURL: "/mp3s/7-Because_It_Was_Hard.m4a",
      imageURL: "/7.png",
    },
    {
      id: 8,
      text: "Here They Come",
      songURL: "/mp3s/8-Here_They_Come.m4a",
      imageURL: "/8.png",
    },
    {
      id: 9,
      text: "Lisa's Plan",
      songURL: "/mp3s/9-Lisa's_Plan.m4a",
      imageURL: "/9.png",
    },
    {
      id: 10,
      text: "First Contact",
      songURL: "/mp3s/10-First_Contact.m4a",
      imageURL: "/10.png",
    },
    {
      id: 11,
      text: "The Robots Can't Be Stopped",
      songURL: "/mp3s/11-The_Robots_Can't_Be_Stopped.m4a",
      imageURL: "/11.png",
    },
    {
      id: 12,
      text: "Giant View",
      songURL: "/mp3s/12-Giant_View.m4a",
      imageURL: "/12.png",
    },
    {
      id: 13,
      text: "Escalation",
      songURL: "/mp3s/13-Escalation.m4a",
      imageURL: "/13.png",
    },
    {
      id: 14,
      text: "Stand Back",
      songURL: "/mp3s/14-Stand_Back.m4a",
      imageURL: "/14.png",
    },
    {
      id: 15,
      text: "Destroyed Android",
      songURL: "/mp3s/15-Destroyed_Android.m4a",
      imageURL: "/15.png",
    },
    {
      id: 16,
      text: "We Won Right",
      songURL: "/mp3s/16-We_Won_Right.m4a",
      imageURL: "/16.png",
    },
    {
      id: 17,
      text: "At Least She Left a Note",
      songURL: "/mp3s/17-At_Least_She_Left_a_Note.m4a",
      imageURL: "/17.png",
    },
    {
      id: 18,
      text: "Working On It",
      songURL: "/mp3s/18-Working_On_It.m4a",
      imageURL: "/17.png",
    },
    {
      id: 19,
      text: "Old Is Now Again",
      songURL: "/mp3s/19-Old_Is_Now_Again.m4a",
      imageURL: "/17.png",
    },
    {
      id: 20,
      text: "Maybe This fet",
      songURL: "/mp3s/20-Maybe_This_fet.m4a",
      imageURL: "/17.png",
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
          <h2 className="mb-12 font-medium text-blue-500 text-1xl">
            An Album by CLA-5
          </h2>

          <AudioPlayer songs={songs} />

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
      </>

      <div></div>
    </div>
  );
}
