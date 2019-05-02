import React from "react";
import Fish from "./Fish";

import pic1 from "./assets/sirozake/1.jpg";
import pic2 from "./assets/sirozake/2.jpg";
import pic3 from "./assets/sirozake/3.jpg";
import pic4 from "./assets/sirozake/4.jpg";
import pic5 from "./assets/sirozake/5.jpg";
import pic6 from "./assets/sirozake/6.jpg";
import pic7 from "./assets/sirozake/7.jpg";

import title from "./assets/interface/title_siro.png";

const siroImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

function renderFishImages() {
  return <Fish images={siroImages} titlePic={title} />;
}

export default renderFishImages;
