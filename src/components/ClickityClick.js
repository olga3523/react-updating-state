import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
        hasBeenClicked: false,
        theme: 'blue',
        addressInfo: {
            street: null,
            number: null,
            city: null,
            country: null
        },  
    };
  }

  handleClick = () => {
    this.setState({
        hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
      
    console.log(this.state.hasBeenClicked)
      
    this.setState({
        addressInfo: {
          city: "New York City",
        },
    });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.addressInfo.city ? this.state.addressInfo.city : "not"}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

