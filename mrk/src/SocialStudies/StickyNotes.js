import React from "react";
import "./StickyNotes.scss";
import { AiOutlineFire, AiOutlineRocket, AiOutlineRead } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { RiKey2Line } from "react-icons/ri";

function StickyNotes() {
  return (
    <div className="sticky-container">
      <ul>
        <li id="blue">
          <a href="#">
            {/* <h2>Current Topic</h2> */}
            <p>Current Topic</p>
            <AiOutlineFire size={30} />
          </a>
        </li>
        <li id="yellow">
          <a href="#">
            {/* <h2>Projects</h2> */}
            <p>Projects</p>
            <AiOutlineRocket size={30} />
          </a>
        </li>
        <li id="green">
          <a href="#">
            {/* <h2>Key Vocabulary Terms</h2> */}
            <p>Key Vocabulary Terms</p>
            <RiKey2Line size={30} />
          </a>
        </li>
        <li id="yellow">
          <a href="#">
            {/* <h2>Assignments</h2> */}
            <p>Assignments</p>
            <AiOutlineRead size={30} />
          </a>
        </li>
        <li id="blue">
          <a href="#">
            {/* <h2>Upcoming Assesments</h2> */}
            <p>Upcoming Assesments</p>
            <BsPencil size={30} />
          </a>
        </li>
        <li id="yellow">
          <a href="#">
            {/* <h2>I.X.L</h2> */}
            <p>I.X.L</p>
            <MdComputer size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default StickyNotes;
