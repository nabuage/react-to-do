import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = (e) => {
        console.log(e.target.value);
        // this.setState({
        //     title: e.target.value
        // });
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        }
        else {
            alert("Please type something");
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                type="text" 
                className="input-text"
                placeholder="Add Todo..."
                value={this.state.title}
                id="title"
                onChange={this.onChange} />
                <button>
                    Submit
                </button>
            </form>
        )
    };
}

export default InputTodo;