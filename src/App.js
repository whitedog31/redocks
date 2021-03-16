import React from "react";
import { useState } from "./context";

import ADD from "./Add";
import List from "./List";
import Todo from "./Todo";
export default function App() {
  // const toDos = useToDos();
  // const completed = useCompleted();

  const { toDos, completed } = useState();
  return (
    <>
      <h1>add to todos</h1>

      <ADD />

      <List name="To do">
        {toDos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </List>

      <List name={completed.length !== 0 ? "Completed" : ""}>
        <>
          {completed.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={true}
            />
          ))}
        </>
      </List>
    </>
  );
}
