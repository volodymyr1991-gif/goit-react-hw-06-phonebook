import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TaskListItem from "../TascListItem/TaskListItem";
import { removeContacts } from "../../redux/contacts/contactsAction";
import "./TaskList.css";

const TaskList = ({ visibleContact, removeContacts }) => (
  <ul className="TaskList">
    {visibleContact.map((contact) => (
      <TaskListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        removeContacts={removeContacts}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  visibleContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
  removeContacts: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phonebook;

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const filtredContacts = contacts[0]
  return {
    visibleContact: filtredContacts,
  };
};

const mapDispatchToProps = {
  removeContacts: removeContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
