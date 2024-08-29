import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Software Tester",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;