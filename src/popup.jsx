import React from "react";
import { render } from "react-dom";

function Popup(){
    return(

    <body>
      <button id="applyFilter">Apply Reddit Minimal View</button>
      <script src="popup.js"></script>
    </body>
    );
}

render(<Popup />, document.getElementById("react-target"));