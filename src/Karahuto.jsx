import React from "react";
import Fish from "./Fish.jsx";

import pic1 from "./assets/karahuto/1.jpg";
import pic2 from "./assets/karahuto/2.jpg";
import pic3 from "./assets/karahuto/3.jpg";
import pic4 from "./assets/karahuto/4.jpg";
import pic5 from "./assets/karahuto/5.jpg";
import pic6 from "./assets/karahuto/6.jpg";
import pic7 from "./assets/karahuto/7.jpg";
import title from "./assets/interface/title_kara.png";

const karaImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const renderFishImages = () => {
  return <Fish images={karaImages} titlePic={title} />;
};

export default renderFishImages;
