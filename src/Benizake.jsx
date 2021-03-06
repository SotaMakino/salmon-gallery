import React from "react";
import Fish from "./Fish.jsx";

import pic1 from "./assets/benizake/1.jpg";
import pic2 from "./assets/benizake/2.jpg";
import pic3 from "./assets/benizake/3.jpg";
import pic4 from "./assets/benizake/4.jpg";
import pic5 from "./assets/benizake/5.jpg";
import pic6 from "./assets/benizake/6.jpg";
import pic7 from "./assets/benizake/7.jpg";
import title from "./assets/interface/title_beni.png";

const beniImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const renderFishImages = () => {
  return <Fish images={beniImages} titlePic={title} />;
};

export default renderFishImages;
