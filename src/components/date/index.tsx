"use client";

import { FrameCorners, FrameLines } from "@arwes/react-frames";
import React, { type ReactElement, useState, useEffect } from "react";
import { Text } from "@arwes/react-text";

function getOrdinal(n: number): string {
  if (n > 3 && n < 21) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

const CustomDate = (): ReactElement => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const now = new Date();

    const weekday = now.toLocaleDateString("en-US", {
      weekday: "long",
      // month: 'long',
    });
    const month = now.toLocaleDateString(`en-US`, { month: "long" });
    const dayWithOrdinal = getOrdinal(now.getDate());
    setFormattedDate(`${weekday}, ${month} ${dayWithOrdinal} `);

    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      });
      setFormattedTime(time);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <div className="">
      <div
        className="m-4 px-4 py-4"
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <FrameCorners
          style={{
            // @ts-expect-error css variables
            "--arwes-frames-bg-color": "hsl(180, 75%, 10%)",
            "--arwes-frames-line-color": "hsl(180, 75%, 50%)",
            "--arwes-frames-deco-color": "hsl(180, 75%, 50%)",
          }}
        />

        {/* The frame component is positioned so the other elements which need
          to be on top should also be positioned. You can change this behaviour
          by using z-index property of any of them. */}
        <div
          style={{ position: "relative", color: "hsl(180, 75%, 50%)" }}
          className=""
        >
          {/* <Text as="p">{formattedDate} {formattedTime}</Text> */}
          <p className="">
            {formattedDate} {formattedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomDate;
