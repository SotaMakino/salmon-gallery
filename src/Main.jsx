import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import main1 from "./assets/Main/main1.jpg";
import main2 from "./assets/Main/main2.jpg";
import main3 from "./assets/Main/main3.jpg";
import main4 from "./assets/Main/main4.jpg";
import main5 from "./assets/Main/main5.jpg";
import main6 from "./assets/Main/main6.jpg";

import "./Main.css";

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
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "black";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <div className="video-btn">
          <button
            type="button"
            className="btn btn-outline-info btn-lg"
            onClick={this.openModal}
          >
            Video
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
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
        <div>
          <div className="row">
            <div className="col">
              <Link to="/sirozake">
                <img src={main4} alt="" className="fish_link" />
              </Link>
            </div>
            <div className="col">
              <Link to="/benizake">
                <img src={main2} alt="" className="fish_link" />
              </Link>
            </div>
            <div className="col">
              <Link to="/ginzake">
                <img src={main6} alt="" className="fish_link" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/sakura">
                <img src={main1} alt="" className="fish_link" />
              </Link>
            </div>
            <div className="col">
              <Link to="/karahuto">
                <img src={main5} alt="" className="fish_link" />
              </Link>
            </div>
            <div className="col">
              <Link to="/masuno">
                <img src={main3} alt="" className="fish_link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
