import React, { useReducer, useState } from "react";
import reducer, { ADD, COMPLETE, DEL, initialState } from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 해당 부분에서 setState 가 적용
  const [newTodo, setNewTodo] = useState("");

  // 전송
  const onSubmit = (e) => {
    // TODO:
    // 따로 enter code 를 적용하지 않았는데 자동으로 됨. 이유는 ????
    console.log("work");
    e.preventDefault();

    // input 에서 받은 text 를 dispatch ADD 를 적용한다.
    dispatch({ type: ADD, payload: newTodo });

    // 다시 reset
    setNewTodo("");
  };
  // 변화 감지
  const onChange = (e) => {
    const { value } = e.target;
    console.log("onChange", value);
    setNewTodo(value);
  };

  return (
    <>
      <h1>add to todos</h1>

      <form onSubmit={onSubmit}>
        <input
          value={newTodo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>

      {/* show */}
      <ul>
        <h2>todos</h2>
        {state.toDos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: todo.id })}>
              "DELETE"
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
            >
              "complete"
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <span onClick={() => dispatch({ type: DEL, payload: todo.id })}>
                  "DELETE"
                </span>
                <span
                  onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
                >
                  "complete"
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
      {/* show 완료 목록  */}
    </>
  );
}
