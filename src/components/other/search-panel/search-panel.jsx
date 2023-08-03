import { Component } from "react";

class SeacrhPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <input type="text" className="form-control search-input" placeholder="search" />;
  }
}

export default SeacrhPanel;
