"use client";
import React, { type ReactElement, useState, useEffect, useRef } from "react";
import { Animator } from "@arwes/react-animator";
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";

import Script from 'next/script';

import CustomDate from "@/components/date";
import { TodayList } from "@/components/today";
import { UpcomingList } from "@/components/upcoming";
import ProjectTasks from "@/components/tempModularCard/tempList";


const Page = (): ReactElement => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const iid = setInterval(() => setActive((active) => !active), 3_000)
    return () => clearInterval(iid)
  }, [])



  return (


      <div
        className="h-screen w-full overflow-hidden container mx-auto flex h-screen items-center">
        <div>
        {/* <div className="flex justify-center">
          <CustomDate />
        </div>

        <div className="flex-1 flex flex-col  container mx-auto">

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue">Projects</p>
            <div className="font-orbitron">
              <ProjectTasks projectName="Projects" />
            </div>
          </div>

          <TodayList />

          <div className="flex flex-col">
            <p className="font-orbitron p-2 text-4xl neon-text-blue ">Learning</p>
            <div className="font-orbitron">
              <ProjectTasks projectName="Learning" />
            </div>
          </div>

          <UpcomingList />
        
        </div> */}



      <div className="grid grid-cols-6">

        <div>
          <CustomDate />
        </div>

        <div className="col-span-4 border p-2" style={{borderColor: "#35453c"}}>
          
          <p className="text-center">Projects</p>
          <ProjectTasks projectName="Projects" />

          <p className="text-center">Learning</p>

          <ProjectTasks projectName="Learning" />

          <TodayList />


          <UpcomingList />

        </div>

        <div>
        

        </div>

      </div>
        


        
      {/* <Dots color="hsla(180, 6%, 31%, 0.40)" /> */}
          <Animator active={active} duration={{ enter: 2, exit: 4 }}>
            <Dots color="hsla(180, 6%, 31%, 0.40)" size={2}  distance={20}/>
          </Animator>

        </div>
        
      </div>

    // <CustomDate />
  );
};

export default Page;
