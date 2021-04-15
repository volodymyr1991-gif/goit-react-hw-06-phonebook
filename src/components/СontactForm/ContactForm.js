import React, { Component } from "react";
import { connect } from "react-redux";
import { addToContacts } from "../../redux/contacts/contactsAction";
import "./ContactForm.css";

const inicial_state = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...inicial_state };
  onAddTask = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
const {name,number}= this.state
    this.props.addToContacts(name,number);

    this.setState({ ...inicial_state });
  };

  render() {
    // const { name, number } = this.state;
    return (
      <form className="ContactForm">
        <label className="ContactForm-label">
          Name
          <input
            className="ContactForm-input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onAddTask}
          />
        </label>
        <label className="ContactForm-label">
          Number
          <input
            className="ContactForm-input"
            name="number"
            type="tel"
            value={this.state.number}
            placeholder="Введіть телефон"
            onChange={this.onAddTask}
          />
        </label>
        <button
          className="ContactForm-button"
          type="submit"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addToContacts: addToContacts,
};
export default connect(null, mapDispatchToProps)(ContactForm);
