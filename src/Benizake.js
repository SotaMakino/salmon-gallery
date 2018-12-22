import React from 'react';
import Slider from 'react-rangeslider';

import './react-rangeslider/lib/index.css';
import './Fish.css';

import pic1 from './assets/benizake/1.jpg';
import pic2 from './assets/benizake/2.jpg';
import pic3 from './assets/benizake/3.jpg';
import pic4 from './assets/benizake/4.jpg';
import pic5 from './assets/benizake/5.jpg';
import pic6 from './assets/benizake/6.jpg';
import pic7 from './assets/benizake/7.jpg';
import sea from './assets/interface/sea.png';
import river from './assets/interface/river.png';
import title from './assets/interface/title.png';


export default class Benizake extends React.Component {

  constructor() {
    super()
    this.state = {
      volume: 0,
      loading: true
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  componentWillMount() {
  }
 
  render() {
    const { volume } = this.state;

    const image1 = this.state.volume >= 0 && this.state.volume < 10 ? <img src={pic1} alt="" class="fish" /> : '';
    const image2 = this.state.volume >= 10 && this.state.volume < 20 ? <img src={pic2} alt="" class="fish" /> : '';
    const image3 = this.state.volume >= 20 && this.state.volume < 30 ? <img src={pic3} alt="" class="fish" /> : '';
    const image4 = this.state.volume >= 30 && this.state.volume < 40 ? <img src={pic4} alt="" class="fish" /> : '';
    const image5 = this.state.volume >= 40 && this.state.volume < 50 ? <img src={pic5} alt="" class="fish" /> : '';
    const image6 = this.state.volume >= 50 && this.state.volume < 60 ? <img src={pic6} alt="" class="fish" /> : '';
    const image7 = this.state.volume >= 60 && this.state.volume <= 70 ? <img src={pic7} alt="" class="fish" /> : '';


    return (
      <div>
        <div className="title">
          <img src={title} alt='aaaaaa' class="title" />
        </div>
        <div className="pic">
          {image1}
          {image2}
          {image3}
          {image4}
          {image5}
          {image6}
          {image7}
        </div>
        <div className="sea">
          <img src={sea} alt='' class="sea"/>
        </div>
        <div className="river">
          <img src={river} alt='' class="river"/>
        </div>
          <div className="bar">
            <Slider
              value={volume}
              max={70}
              tooltip={false}
              onChange={this.handleOnChange}
            />
          </div>
      </div>
    )
  }
}