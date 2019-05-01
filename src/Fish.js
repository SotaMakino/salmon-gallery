import React from 'react';
import Slider from 'react-rangeslider';
import { Link } from 'react-router-dom';

import './react-rangeslider/lib/index.css';
import './Fish.css';

import sea from './assets/interface/sea.png';
import river from './assets/interface/river.png';
import back from './assets/interface/back.png';


export default class Fish extends React.Component {

  constructor() {
    super()
    this.state = {
      volume: 0
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
  render() {
    const { volume } = this.state;

    const image1 = this.state.volume >= 0 && this.state.volume < 10 ? <img src={this.props.images[0]} alt="" class="fish" /> : '';
    const image2 = this.state.volume >= 10 && this.state.volume < 20 ? <img src={this.props.images[1]} alt="" class="fish" /> : '';
    const image3 = this.state.volume >= 20 && this.state.volume < 30 ? <img src={this.props.images[2]} alt="" class="fish" /> : '';
    const image4 = this.state.volume >= 30 && this.state.volume < 40 ? <img src={this.props.images[3]} alt="" class="fish" /> : '';
    const image5 = this.state.volume >= 40 && this.state.volume < 50 ? <img src={this.props.images[4]} alt="" class="fish" /> : '';
    const image6 = this.state.volume >= 50 && this.state.volume < 60 ? <img src={this.props.images[5]} alt="" class="fish" /> : '';
    const image7 = this.state.volume >= 60 && this.state.volume <= 70 ? <img src={this.props.images[6]} alt="" class="fish" /> : '';


    return (
      <div>
        <div>
          <img src={this.props.titlePic} alt='' class="title" />
        </div>
        <div>
          <Link to="/"><img src={back} alt='' class="back"/></Link>
        </div>
        <div>
          {image1}
          {image2}
          {image3}
          {image4}
          {image5}
          {image6}
          {image7}
        </div>
        <div>
          <img src={sea} alt='' class="sea"/>
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