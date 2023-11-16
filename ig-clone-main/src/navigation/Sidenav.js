import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import igl from '../assets/igl.png'

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
      alt="_..._"/>
      <img src={igl} />
      <div className="sidenav__buttons">
      <button className="sidenav__button">
          <HomeIcon />
          <span className="hideonsmall" >Home</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span onClick={()=>{
            document.querySelector('.fscreen').style.display='flex'
          }} className="hideonsmall">Create</span>
        </button>
      </div>

    </div>
  );
}

export default Sidenav;
