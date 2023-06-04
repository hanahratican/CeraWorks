import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/epalma98/ceramic-coating"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#F38442"
      />
    </div>
  );
};

export default Calendly;