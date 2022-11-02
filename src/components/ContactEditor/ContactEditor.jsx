import React, { Component } from "react";
import "./TodoEditor.scss";

class TodoEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangePhonenumber = (e) => {
    this.setState({ phonenumber: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name , this.state.phonenumber);
    this.setState({ name: "", phonenumber: ""  });

  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChangeName}
        ></textarea>

<textarea
          className="TodoEditor__textarea"
          value={this.state.name}
          onChange={this.handleChangePhonenumber}
        ></textarea>

        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
