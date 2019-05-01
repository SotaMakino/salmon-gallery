import React from 'react';
import Fish from './Fish';

import pic1 from './assets/sakura/1.jpg';
import pic2 from './assets/sakura/2.jpg';
import pic3 from './assets/sakura/3.jpg';
import pic4 from './assets/sakura/4.jpg';
import pic5 from './assets/sakura/5.jpg';
import pic6 from './assets/sakura/6.jpg';
import pic7 from './assets/sakura/7.jpg';

const sakuImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]

function renderFishImages() {
  return(
    <Fish 
      images={sakuImages}
    />
  )
}

export default renderFishImages;