import React from "react";
import "./style.css";

function Button() {
  return (
    <Button className="button" style={this.props.style}>
      Sort
    </Button>
  );
}

export default Button;
