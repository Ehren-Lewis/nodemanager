"use client";
import React, { type ReactElement, useState, useEffect } from "react";
import { Animator } from "@arwes/react-animator";
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";

import CustomDate from "@/components/date";
import { TodayList } from "@/components/today";
import { UpcomingList } from "@/components/upcoming";
import ProjectTasks from "@/components/tempModularCard/tempList";
const Page = (): ReactElement => {
  // const [active, setActive] = useState(true)

  // useEffect(() => {
  //   const tid = setInterval(() => setActive(!active), active ? 5_000 : 1_000)
  //   return () => clearInterval(tid)
  // }, [active])

  return (
    <Animator active={true}>
      <div
        className="h-screen w-full overflow-hidden flex flex-col bg-cover bg-center "
        style={{
          // backgroundColor: "#000906",
           backgroundImage: `url('/scifibackground.jpg')`   }}
            // "radial-gradient(85% 85% at 50% 50%, hsla(61, 32.80%, 52.20%, 0.25)hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)",
    
      >
        <div className="flex justify-center">
          <CustomDate />
        </div>

        <div className="flex-1 flex flex-col justify-between container mx-auto">

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue">Projects</p>
            <div className="font-orbitron">
              <ProjectTasks projectName="Projects" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue">To Do Today</p>
            <div className="font-orbitron">
              <TodayList />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue ">Learning</p>
            <div className="font-orbitron">
              <ProjectTasks projectName="Learning" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue">Upcoming</p>
            <div className="font-orbitron">
              <UpcomingList />
            </div>
          </div>
        </div>
        


        {/* <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} /> */}
        <MovingLines className="z-0"
          lineColor="hsla(303, 96.10%, 40.20%, 0.12)"
          distance={30}
          sets={20}
        />
      </div>
    </Animator>

    // <CustomDate />
  );
};

export default Page;
