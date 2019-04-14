import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import main1 from './assets/Main/main1.jpg';
import main2 from './assets/Main/main2.jpg';
import main3 from './assets/Main/main3.jpg';
import main4 from './assets/Main/main4.jpg';
import main5 from './assets/Main/main5.jpg';
import main6 from './assets/Main/main6.jpg';

import './Main.css';

export default class Main extends React.Component {

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
    openModal() {
    this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }
    
    
    render(){
        return(
            <div>
                <div>
                    <div class="row">
                        <div class="col"><Link to="/sirozake"><img src={main4} alt="" class="fish_link"/></Link></div>
                        <div class="col"><Link to="/benizake"><img src={main2} alt="" class="fish_link"/></Link></div>
                        <div class="col"><Link to="/ginzake"><img src={main6} alt="" class="fish_link"/></Link></div>
                    </div>
                    <div class="row">
                        <div class="col"><Link to="/sakura"><img src={main1} alt="" class="fish_link"/></Link></div>
                        <div class="col"><Link to="/karahuto"><img src={main5} alt="" class="fish_link"/></Link></div>
                        <div class="col"><Link to="/masuno"><img src={main3} alt="" class="fish_link"/></Link></div>
                    </div>
                </div>
                <div>
                <button onClick={this.openModal}>Open Modal</button>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    >
                    <h2 ref={subtitle => this.subtitle = subtitle}></h2>
                    <iframe 
                    src="https://player.vimeo.com/video/308084254?autoplay=1&loop=1" 
                    width="740" 
                    height="452" 
                    frameBorder="0" 
                    title="sake"
                    loop="1"
                    />
                    {/* <p><a href="https://vimeo.com/308084254">切り身アニメーション</a> from <a href="https://vimeo.com/user93154422">yoga sota</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
                    </Modal>
                </div>
            </div>
        )
    }
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };