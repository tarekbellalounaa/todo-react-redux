import React from "react";
import { connect } from "react-redux";
import {
  ADDITION,
  DELETE,
  COMPLETE,
  EDITER,
  DOONE
} from "./Actions/todosActions";
import uuid from "uuid";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      input1: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = () => {
    let newtodo = {
      text: this.state.input,
      complete: false,
      edit: true,
      id: uuid()
    };
    this.props.add(newtodo);

    this.setState({ input: "" });
  };
  remove = id => {
    this.props.remove(id);
  };

  handleCheckEdit = (id, text) => {
    this.props.editer(id);
    this.setState({ input1: text });
  };

  done = (id, text) => {
    this.props.done(id, text);
  };
  handleCheck = id => {
    this.props.complete(id);
  };
  render() {
    return (
      <div className="container">
        <div className="title">
          <p>Daily Todo Lists</p>
        </div>
        <div className="add">
          <input
            name="input"
            onChange={this.handleChange}
            className="input"
            value={this.state.input}
            placeholder="Add your todo"
          />
          <div className="plusstyle">
            <i onClick={this.add} class="plus fa-3x fas fa-plus"></i>
          </div>
        </div>
        {this.props.todos.map(el => (
          <div className="todo">
            {el.edit ? (
              <div className="todo1">
                <input
                  className="check"
                  type="checkbox"
                  id={el.id}
                  onChange={() => this.handleCheck(el.id)}
                />
                <label
                  htmlFor={el.id}
                  style={{
                    textDecoration: el.complete ? "line-through" : "none"
                  }}
                  className="label"
                >
                  {el.edit ? el.text : el.text1}
                </label>{" "}
              </div>
            ) : (
              <div>
                {" "}
                <button
                  className="done"
                  onClick={() => this.done(el.id, this.state.input1)}
                >
                  DONE
                </button>{" "}
                <input className="inputdone"
                  name="input1"
                  onChange={this.handleChange}
                  placeholder={el.text}
                  type="text"
                  value={this.state.input1}
                />
              </div>
            )}

            <div className="todo2">
              <i
                onClick={() => this.handleCheckEdit(el.id, el.text)}
                class=" fa-2x edit fas fa-clipboard"
              ></i>

              <i
                onClick={() => this.remove(el.id)}
                class="trash  fa-2x fas fa-trash-alt"
              ></i>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.TodoReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: x => dispatch(ADDITION(x)),
    remove: ID => dispatch(DELETE(ID)),
    complete: ID => dispatch(COMPLETE(ID)),
    editer: ID => dispatch(EDITER(ID)),
    done: (ID, text) => dispatch(DOONE(ID, text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
