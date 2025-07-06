"use client";
import React, { type ReactElement, useState, useEffect } from "react";
import { Animator } from "@arwes/react-animator";
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";

import CustomDate from "@/components/date";
import { TodayList } from "@/components/today";
import { ProjectList } from "@/components/projects";
import { LearningList } from "@/components/learning";
import { UpcomingList } from "@/components/upcoming";

const Page = (): ReactElement => {
  // const [active, setActive] = useState(true)

  // useEffect(() => {
  //   const tid = setInterval(() => setActive(!active), active ? 5_000 : 1_000)
  //   return () => clearInterval(tid)
  // }, [active])

  return (
    <Animator active={true}>
      <div
        className=""
        style={{
          backgroundColor: "#000906",
          backgroundImage:
            "radial-gradient(85% 85% at 50% 50%, hsla(61, 32.80%, 52.20%, 0.25)hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
        }}
      >
        <div className="flex justify-center">
          <CustomDate />
        </div>

        <div className="flex flex-col items-center">
          <p className="font-orbitron">Projects</p>
          <div className="grid sm:grid-cols-5 gap-8 font-orbitron">
            <ProjectList />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-orbitron">To Do Today</p>
          <div className="grid sm:grid-cols-5 gap-8 font-orbitron">
            <TodayList />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-orbitron">Learning</p>
          <div className="grid sm:grid-cols-5 gap-8 font-orbitron">
            <LearningList />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-orbitron">Upcoming</p>
          <div className="grid sm:grid-cols-5 gap-8 font-orbitron">
            <UpcomingList />
          </div>
        </div>

        <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <MovingLines
          lineColor="hsla(180, 100%, 75%, 0.07)"
          distance={30}
          sets={20}
        />
      </div>
    </Animator>

    // <CustomDate />
  );
};

export default Page;
