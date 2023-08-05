import { Component } from "react";

class AppSeacrhPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
    console.log(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default AppSeacrhPanel;
