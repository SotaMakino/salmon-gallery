import React from 'react';
import Fish from './Fish';

import pic1 from './assets/ginzake/1.jpg';
import pic2 from './assets/ginzake/2.jpg';
import pic3 from './assets/ginzake/3.jpg';
import pic4 from './assets/ginzake/4.jpg';
import pic5 from './assets/ginzake/5.jpg';
import pic6 from './assets/ginzake/6.jpg';
import pic7 from './assets/ginzake/7.jpg';

const ginImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]

function renderFishImages() {
  return(
    <Fish 
      images={ginImages}
    />
  )
}

export default renderFishImages;