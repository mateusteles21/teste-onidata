import React, { useState } from 'react';
import ListItem from './listItem';
import Input from './input';
import "../produtos/produtos.css"
import Copyright from "../../components/Copyright"; 

import Box from "@material-ui/core/Box";

const Produtos = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="App">
      <div className="prod-header">
          <h1>Tela de produtos</h1>
        <Input onSubmit={addNewTask} />
        {tasks.map(({id, value}, index) => (
          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
      <div className="Array-preview">
        <pre>
          {JSON.stringify(tasks, null, 4)}
        </pre>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  )
}

export default Produtos;