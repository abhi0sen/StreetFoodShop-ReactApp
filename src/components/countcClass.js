import React, { Component } from "react";
// import { Component } from "react/cjs/react.production.min";

class CountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue,
        };
        this.text
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

    render() {
        return (
            <div>
                <p>Class based componenets</p>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.increaseCount()}>Increase</button>
                <button onClick={() => this.decreaseCount()}>Decrease</button>
                <div>
            {this.count % 2 !== 0 && (
            <div style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"red"}}></div>
            )}
            {this.count % 2 === 0 && (
            <div style={{margin: "20px", height: "100px", width: "100px", backgroundColor:"blue"}}></div>
            )}
        </div>
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                const count = this.state.text.split(" ").length;
                this.setState({
                    numberofWords: count,
                });
            }}>

                <input type={"text"} name="sentence" onChange={
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
            <p>Number of Words</p>
        </div>
            </div>
        )
    }
}

export default CountComponent;