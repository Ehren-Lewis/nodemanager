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
        className="m-4 px-4 py-4 gray"
        style={{
          color: "#8e9b92ff"
        }}
      >
        <div className="text-center">
          <p className="text-2xl">
             {formattedTime}
          </p>
          <p>
            {formattedDate}
          </p>

        </div>
      </div>
    </div>
  );
};

export default CustomDate;
