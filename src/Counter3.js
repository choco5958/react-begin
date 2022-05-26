import React, { Component } from "react";

class Counter3 extends Component{
    // constructor(props){
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // handleIncrease(){
    //     console.log('increase');
    //     console.log(this);
    // }

    // handleDecrease(){
    //     console.log('decrease');
    // }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //         fixed: 1
    //     };
    // }

    state = {
        counter: 0,
        fixed: 1,
        // updateMe: {
        //     toggleMe: false,
        //     dontChangeMe: 1
        // }
    };
    

    //화살표함수
    handleIncrease = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };
    
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    };

    // handeToggle = () => {
    //     this.setState({
    //         updateMe: {
    //             ...this.state.updateMe,
    //             toggleMe: !this.state.updateMe.toggleMe
    //         }
    //     })
    // }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                {/* <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button> */}
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        )
    }
}

export default Counter3;