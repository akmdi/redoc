import React from "react";

export default class BranchSelect extends React.Component {

  renderBranches() {
    return this.props.branches.map((branch, index) => {
      return (
        <option key={index} value={branch}>{branch}</option>
      );
    });
  }

  handleChange(event) {
    if (this.props.onBranchSelect) {
      this.props.onBranchSelect(event.target.value);
    }
  }

  render() {
    if (this.props.branches.length > 0) {
      return (
        <div className="redoc control select">
          <select
            onChange={this.handleChange.bind(this)}
            ref="select"
            value={this.props.currentBranch}
            id="branch-select"
          >
            {this.renderBranches()}
          </select>
          <div className="icon right">
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
      );
    }

    return (
      <div className="loading">{"Loading..."}</div>
    );
  }
}
