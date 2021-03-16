import React, { useState } from "react";
import { useDispatch } from "./context";
import { ADD } from "./actions";

export default () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
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
    <form onSubmit={onSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  );
};
