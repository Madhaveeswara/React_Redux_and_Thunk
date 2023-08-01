import React, { Component } from 'react';

class ExampleClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(" Component did mount !! ");
    }

    componentDidUpdate() {
        console.log(" Component did update !! ");
    }

    increment = () => {
        this.setState(()=> {return {count: this.state.count + 1}});
      //  this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Click</button>
            </div>
        )
    }
}

export default ExampleClass;