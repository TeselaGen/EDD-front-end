import React, { Component } from "react";
import "./index.css";

export default class accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null
    };
  }

  render() {
    const { elements } = this.props;
    return (
      <ul className="accordion">
        {
          elements.map((element, index)=>(
            <li key={index}>
              <a
                className={this.state.isOpen === index ? "active" : ""}
                onClick={() => this.setState(this.state.isOpen !== index ? { isOpen: index }: {isOpen: null})}
              >
                {element.title}
              </a>
              <div className='accordion-content' style={this.state.isOpen === index ? { display: 'block' } : { display: 'none' }}>
                {element.content}
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}
