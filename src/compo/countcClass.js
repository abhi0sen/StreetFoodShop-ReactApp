import React, { Component } from "react";
// import { Component } from "react/cjs/react.production.min";

class CountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue,
            text: "",
            numberOfWords: 0,
        };
        this.inputRef = React.createRef();
        console.log("Constructor Method is called");
    }

    increaseCount() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decreaseCount() {
        this.setState({
            count: this.state.count - 1,
        })
    }

    componentDidMount() {
        console.log("componentDidMount method is called");
      }
    
      componentDidUpdate(nextState, prevState) {
        console.log("componentDidUpdate method is called", {
          nextState,
          prevState,
        });
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount method is called");
      }

    render() {
        return (
            <div style={{ background: "#ccc"}}>
                <p>Class based componenets</p>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.increaseCount()}>Increase</button>
                <button onClick={() => this.decreaseCount()}>Decrease</button>
                <div>
            {this.state.count % 2 !== 0 && (
            <div id="red" style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"red"}}></div>
            )}
            {this.state.count % 2 === 0 && (
            <div id="red" style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"cyan"}}></div>
            )}
        </div>
        <div>
            <h2>Word Count</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                const count = this.state.text.split(" ").length;
                this.setState({
                    numberOfWords: count,
                });
                console.log("Reference - ", this.inputRef.current.value);
            }}>

                <input type="text" name="sentence" onChange={
                    (event) => {
                        this.setState({
                        text: event.target.value,
                        // console.log
                    })
                    }
                }
                value={this.state.text}/>
                <button type="submit" onClick={
                    (event)=>{
                        const count = this.state.text.split(" ").length;
                        this.setState({
                            numberofWords: count,
                        })
                    }
                }>submit</button>
            </form>
            <p>Number of Words: (this.state.numberOfWords)</p>
        </div>
            </div>
        )
    }
}

export default CountComponent;