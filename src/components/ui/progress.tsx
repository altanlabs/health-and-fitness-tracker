import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProgressProps {
  value: number;
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className="w-64 h-64">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#33691e",
          pathColor: `rgba(76, 175, 80, ${value / 100})`,
          trailColor: "#d6d6d6",
        })}
      />
    </div>
  );
};

export { Progress };
