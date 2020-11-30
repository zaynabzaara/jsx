import React from "react";
import srcImage from "./imageInSrc.jpeg";
import "./style.css";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={srcImage} alt="imageInSrc" />
        <br />
        <img src={"/imageInPublic.png"} alt="imageInPublic" />
      </div>
      <video width="320" height="240" controls>
        <source src={"myVideo.mp4"} type={"video/mp4"} />
      </video>
    </>
  );
}

export default App;
