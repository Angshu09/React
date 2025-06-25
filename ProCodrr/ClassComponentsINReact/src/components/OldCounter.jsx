import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };

    console.log(props);
  }

  render() {
    const { count2 } = this.state;
    const { name } = this.props;

    return (
      <>
        <h1>{name}</h1>
        <div className="counterContainer">
          <button
            className="btn"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <p>{this.state.count}</p>
          <button
            className="btn"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </div>

        <div className="counterContainer">
          <button
            className="btn"
            onClick={() => this.setState({ count2: count2 + 1 })}
          >
            +
          </button>
          <p>{count2}</p>
          <button
            className="btn"
            onClick={() => this.setState({ count2: count2 - 1 })}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
