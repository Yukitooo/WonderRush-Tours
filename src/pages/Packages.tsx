import React, { useState } from "react";
import "./packages.css";
import {
  tourButtons,
  oneDayPackages,
  twoDayPackages,
  threeDayPackages,
  fourDayPackages,
  fiveDayPackages,
} from "../datas/tourPackages";

const Packages: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  let packageList: string[] = [];
  let title = "";
  switch (selected) {
    case "1-day tours":
      packageList = oneDayPackages;
      title = "1-Day Tour Packages";
      break;
    case "2-day tours":
      packageList = twoDayPackages;
      title = "2-Day Tour Packages";
      break;
    case "3-day tours":
      packageList = threeDayPackages;
      title = "3-Day Tour Packages";
      break;
    case "4-day tours":
      packageList = fourDayPackages;
      title = "4-Day Tour Packages";
      break;
    case "5-day tours":
      packageList = fiveDayPackages;
      title = "5-Day Tour Packages";
      break;
    default:
      packageList = [];
      title = "";
  }

  return (
    <div className="packages-container">
      <div className="sidebar">
        {tourButtons.map((label) => (
          <button
            key={label}
            className={`sidebar-btn${selected === label ? " active" : ""}`}
            onClick={() => setSelected(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="content">
        {packageList.length > 0 && (
          <div className="package-list">
            <h2>{title}</h2>
            <ul>
              {packageList.map((pkg) => (
                <li key={pkg}>{pkg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
