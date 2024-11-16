import { Component } from "react";

class CounterOld extends Component {
    constructor() {
        super()
        this.state = {
            count:0,
            // count2: 0
        }
        console.log('constructor') // first 

        //If we want to use props in the constructor then we have to pass the props to the super(), like this - 
        /*constructor(props) {
            super(props)
            console.log(props)
        }*/
        
    }

    componentDidMount(){
        console.log('componentDidMount') //third
    }

    componentDidUpdate(){
        console.log('componentDidUpdate') //it runs when updating happen in our page 
    }

    componentWillUnmount(){
        console.log('componentWillUnmount') //it runs when we go to other pages basically when the component will unmount
    }

  render() {
    console.log('render') //second, it also runs when updating happen in our page 
    const { name } = this.props;
    return (
      <>
        <h1 className="mt-10 ml-10">{name}</h1>
        <div className="mt-10 ml-10 flex gap-5">
          <button
            className="px-3 py-1 bg-slate-500 text-white border"
            onClick={() => this.setState({count: this.state.count - 1})}
          >
            -
          </button>
          <h1>{this.state.count}</h1>
          <button
            className="px-3 py-1 bg-slate-500 text-white border"
            onClick={() => this.setState({count: this.state.count + 1})}
          >
            +
          </button>
        </div>
        {/* <div className="mt-10 ml-10 flex gap-5">
          <button
            className="px-3 py-1 bg-slate-500 text-white border"
            onClick={() => this.setState({count2: this.state.count2 - 1})}
          >
            -
          </button>
          <h1>{this.state.count2}</h1>
          <button
            className="px-3 py-1 bg-slate-500 text-white border"
            onClick={() => this.setState({count2: this.state.count2 + 1})}
          >
            +
          </button>
        </div> */}
      </>
    );
  }
}
export default CounterOld;
