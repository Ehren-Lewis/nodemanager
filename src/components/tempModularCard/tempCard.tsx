'use client';
import { useState, useEffect } from 'react';

import { FrameNefrex, FrameLines } from '@arwes/react-frames';
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";

interface Props {
  title: string,
  id: string
}

const tempStyle = {
  '--arwes-frames-bg-color': 'hsla(0, 0%, 41%, 0.19)',
  '--arwes-frames-line-color': 'hsla(138, 6%, 58%, 1.00)',  
} as React.CSSProperties;

const CardItem: ({title, id}: Props) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
const handleRemove = async (id:string) => {
  try {
        const res = await fetch(`/api/todoistProjectRemove?id=${encodeURIComponent(id)}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

    }  catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      } 


  return (
    <div className="relative w-72 p-5 my-4 transformation mx-auto xl:mx-2">
      <FrameNefrex style={tempStyle}/>
      <div className="absolute inset-0 flex items-center justify-center font-orbitron z-10 text-center " style={{color: "#688574ff"}}>
        {title} 
      </div>
    </div>
  )
}

export default CardItem;