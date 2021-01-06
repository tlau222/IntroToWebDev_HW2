import React from "react";
import notes from "../notes";

function Footer(props) {
    return (
      <div>
        <footer>
            <p>{props.copyright} {(new Date().getFullYear())}</p>
        </footer>
      </div>
    );
  }
  
  export default Footer