import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class MainEmoji extends Component {
  render() {
    var img = '';
    var title = '';
    if(this.props.activeEmoji !== -1) {
      img = <Image
              title={":" + this.props.keys[this.props.activeEmoji] + ":"}
              alt={this.props.keys[this.props.activeEmoji]}
              src={this.props.values[this.props.activeEmoji]}
              width="40" height="40"
            />
      title = <h4><b>:{this.props.keys[this.props.activeEmoji]}:</b></h4>
    } else {
      img = '';
      title = '';
    }
    return (
      <div className="mainEmoji">
        {img}
        {title}
      </div>
    );
  }
}

export default MainEmoji;
