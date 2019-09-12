import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isShow: true,
        };
        console.log(props)
      }
    componentWillMount() {
        console.log('I am about to say hello');
    }

    render() {
        return <h1>Hello world</h1>;
    }
}
  
  export default Test;