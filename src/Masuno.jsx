import React from "react";
import Fish from "./Fish";

import pic1 from "./assets/masuno/1.jpg";
import pic2 from "./assets/masuno/2.jpg";
import pic3 from "./assets/masuno/3.jpg";
import pic4 from "./assets/masuno/4.jpg";
import pic5 from "./assets/masuno/5.jpg";
import pic6 from "./assets/masuno/6.jpg";
import pic7 from "./assets/masuno/7.jpg";
import title from "./assets/interface/title_masu.png";

const masuImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const renderFishImages = () => {
  return <Fish images={masuImages} titlePic={title} />;
};

export default renderFishImages;
