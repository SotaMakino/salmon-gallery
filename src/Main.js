import React from 'react';
import { Link } from 'react-router-dom';

import title from './assets/main/main_title.png';
import main1 from './assets/main/main1.jpg';
import main2 from './assets/main/main2.jpg';
import main3 from './assets/main/main3.jpg';
import main4 from './assets/main/main4.jpg';
import main5 from './assets/main/main5.jpg';
import main6 from './assets/Main/main6.jpg';

import './Main.css';

export default class Main extends React.Component {
    render(){
        return(
            <div>
                <div class="title">
                    <img src={title} alt="" class="main_title"/>
                </div>
                <div class="fishes">
                    <ul class="menu">
                        <li><Link to="/sakura"><img src={main1} alt="" class="fish_link"/></Link></li>
                        <li><Link to="/benizake"><img src={main2} alt="" class="fish_link"/></Link></li>
                        <li><Link to="/masuno"><img src={main3} alt="" class="fish_link"/></Link></li>
                    </ul>
                    <ul class="menu">
                        <li><Link to="/sirozake"><img src={main4} alt="" class="fish_link"/></Link></li>
                        <li><Link to="/karahuto"><img src={main5} alt="" class="fish_link"/></Link></li>
                        <li><Link to="/ginzake"><img src={main6} alt="" class="fish_link"/></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}