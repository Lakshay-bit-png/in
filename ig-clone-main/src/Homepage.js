import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";

import Timeline from "./timeline/Timeline";
import Pop from "./timeline/Pop";


function Homepage() {
  return (
    <>
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage_timelne">
        <Timeline />
      </div>
     
    </div>
     <Pop/>
     </>
  );
}

export default Homepage;
