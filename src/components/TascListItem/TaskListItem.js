import React from "react";
import PropTypes from "prop-types";
import "../TaskList/TaskList.css";


const TaskListItem = ({ id,number, name, removeContacts }) => {
  return (
    <li className="TaskList-item ">
      <p className="TaskList-text">
        {name}: {number}.
      </p>

      <section className="TaskList-actions">
        <button type="button" className="TaskList-button" id={id} onClick={()=>removeContacts(id)}>
      
        </button>
      </section>
    </li>
  );
};

TaskListItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string.isRequired,
  removeContacts: PropTypes.func,
};



export default TaskListItem;
