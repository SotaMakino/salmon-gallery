import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

export default class Main extends React.Component {
    render(){
        return(
            <div>
                <title>大集合</title>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/benizake">ベニザケ</Link></li>
                        <li><Link to="/masuno">マスノザケ</Link></li>
                        <li><Link to="/karahuto">カラフト</Link></li>
                        <li><Link to="/sakura">サクラ</Link></li>
                        <li><Link to="/sirozake">しろ</Link></li>
                        <li><Link to="/ginzake">銀鮭</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}