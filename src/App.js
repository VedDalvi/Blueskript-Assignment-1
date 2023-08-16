import React, { useState } from 'react';

import Task from './components/Task.js';
import Header from './components/Header.js';
import TabsCycle from  './components/TabsCycle.js';
import List from "./components/List";
import AddTask from './components/AddTask';

import './App.css';
import PredefinedTasks from './PredefinedTasks.json';


function App() {
   
  const [ toDoList, setToDoList ] = useState(PredefinedTasks);
  const [ currList, setcurrList ] = useState(PredefinedTasks);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const taskAll = () => {
   
    setcurrList(PredefinedTasks);
  }

const taskNotCompleted = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setcurrList(filtered);
  }
  
  const taskCompleted = () => {
    let filtered = toDoList.filter(task => {
      return task.complete;
    });
    setcurrList(filtered);
  }
  
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }


  return (
    <div className="App">
      <h1><Header/></h1>
      <br></br>
      <AddTask addTask={addTask}/>

      <TabsCycle>
        <div label="All" tabClicked={taskAll}>
        <List toDoList={toDoList} handleToggle={handleToggle} handleFilter={taskAll}/>
        </div>

        <div label="Pending" tabClicked={taskNotCompleted}>
        <List toDoList={currList} handleToggle={handleToggle} handleFilter={taskAll}/>
        </div>

        <div label="Completed" tabClicked={taskCompleted}>
        <List toDoList={currList} handleToggle={handleToggle} handleFilter={taskAll}/>
        </div>

      </TabsCycle>
    </div>
  );
}

export default App;
