import React from "react";

class TodoListItemClass extends React.Component {
  render() {
    return (
      <p>
        <input type="checkbox" defaultChecked={this.props.isComplete} />
        {this.props.children}
      </p>
    );
  }
}

export default TodoListItemClass;
