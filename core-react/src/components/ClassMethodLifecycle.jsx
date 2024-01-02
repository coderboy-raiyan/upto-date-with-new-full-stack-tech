import React from "react";

class ClassChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name: "",
    };
    this.timeOut;
  }

  componentDidMount() {
    console.log("Mount");
    console.log("Render");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("render");
    if (prevState.name != this.state.name) {
      if (this.timeOut != null) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        document.title = this.state.name;
      }, 1000);
    }
  }

  componentWillUnmount() {
    console.log("Bye");
  }

  render() {
    return (
      <>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <p>My name is : {this.state.name}</p>
      </>
    );
  }
}

export default ClassChildComponent;
