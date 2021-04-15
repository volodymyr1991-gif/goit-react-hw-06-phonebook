// import SignAppForm from './components/SignAppForm/SignAppForm';
import React, { Component } from "react";
import ContactForm from "./СontactForm/ContactForm";
import Filter from "./filter/Filter";
import TaskList from "./TaskList/TaskList";
import Layout from "./Layout/Layout";

// import { v4 as uuidv4 } from "uuid";

export default class App extends Component {

  
  render() {
    return (
      <>
        <Layout>
          <h1>Phonebook</h1>

          <ContactForm addToContacts={this.addToContacts}/>

          <h2>Contacts</h2>

          <Filter />

          <TaskList
          // visibleContact={visibleContact}
          // onDelete={this.onDelete}
          />
        </Layout>
      </>
    );
  }
}

// export default class App extends Component {
//   state = {
//     tasks: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount(prevState) {
//     console.log("componentDidMount tasks ", this.props);
//     const persistedTasks = localStorage.getItem("tasks");
// this.getVisibleTasks()
//     if (persistedTasks) {
//       this.setState({
//         tasks: JSON.parse(persistedTasks),
//       });
//     }
//   }

//   componentDidUpdate(prevState) {
//     console.log("componentDidUpdate", prevState);
//     if (prevState.tasks !== this.state.tasks) {
//       localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
//     }
//   }

//   changeFilter = (filter) => {
//     console.log(filter);
//     this.setState({ filter });
//   };

//   addtask = (task) => {
//     const semName = this.state.tasks
//       .map((task) => task.name)
//       .includes(task.name);
//     if (semName) {
//       alert(`${task.name} is already in contacts`);
//     } else {
//       const contact = {
//         id: uuidv4(),
//         ...task,
//       };

//       this.setState((prevstate) => {
//         return {
//           tasks: [...prevstate.tasks, contact],
//         };
//       });
//     }
//   };

//   removeTask = (taskId) => {
//     this.setState((prevState) => {
//       return {
//         tasks: prevState.tasks.filter(({ id }) => id !== taskId),
//       };
//     });
//   };

//   getVisibleTasks = () => {
//     const { tasks, filter } = this.state;

//     return tasks.filter((tasks) =>
//       tasks.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;

//     const visibleTasks = this.getVisibleTasks();
//     console.log("visibletasc", visibleTasks);
//     return (
//       <Layout>
//         <h1>Phonebook</h1>
//         <ContactForm onAddTask={this.addtask} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChangeFilter={this.changeFilter} />
//         {/* {visibleTasks.length > 1 && (
//           <Filter value={filter} onChangeFilter={this.changeFilter} />
//         )} */}

//         {visibleTasks.length > 0 && (
//           <TaskList tasks={visibleTasks} onRemoveTask={this.removeTask} />
//         )}
//       </Layout>
//     );
//   }
// }
