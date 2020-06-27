import React, { Component } from 'react';
import { render } from 'react-dom';

class MyName extends Component {
  // static defaultProps = {
  //   name : 'HONG33'
  // }

  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>
      </div>
    );
  }
}

// MyName.defaultProps = {
//   name: 'HONG33'
// }

export default MyName;
