import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
    state = {
        editing: false
    };

    handleEditing = () => {
        console.log("edit mode activated");

        this.setState({
            editing: true
        });
    }

    handleUpdatedDone = (e) => {
        console.log(e.key);

        if (e.key === "Enter") {
            this.setState({
                editing: false
            });
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        };

        let viewMode = {};
        let editMode = {};

        if (this.state.editing) {
            viewMode.display = "none";
        }
        else {
            editMode.display = "none";
        }

        

        return (
            <li className="styles.item">
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={this.props.todo.completed} 
                        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                        /> 
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                        Delete
                    </button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                    </span>
                </div>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    style={editMode} 
                    value={this.props.todo.title} 
                    onChange={(e) => {
                        //console.log(e.target.value, this.props.todo.id);
                        this.props.setUpdate(e.target.value, this.props.todo.id);
                    }} 
                    onKeyDown={this.handleUpdatedDone} />
            </li>
        );
    };
}

// function TodoItem(props) {
//     return <li>{props.todo.title}</li>;
// }

export default TodoItem;