import React from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "./actions";
import { useDispatch } from "./context";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  console.log("text", text);
  return (
    <li>
      <span>{text}</span>
      <span onClick={() => dispatch({ type: DEL, payload: id })}>"DELETE"</span>
      <span
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "O" : "X"}
      </span>
    </li>
  );
};
