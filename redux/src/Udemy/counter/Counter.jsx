import React, { Component } from 'react'; 
class Counter extends Component{
    constructor(props) {
        super(props); 
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState((prevState) => {
            return{
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
export default Counter;
