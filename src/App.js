import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// 초기 값
const initialState = {
  toDos: [],
};

// 액션 타입 선언
const ADD = "add";
const DEL = "del";

// reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    // 삭제하기
    //  이전에 가져온 todos 에 정보를 가져온다.
    // filter 를 이용하여, true 면 살리고 false 죽인다.
    //  즉, current 와 target 이 다른 것만 살리고 , 같은것만 지운다.
    case DEL:
      return {
        toDos: state.toDos.filter((todo) => {
          console.table("current", todo.id, "target", action.payload);
          return todo.id !== action.payload;
        }),
      };
    // return {
    //   toDos: state.toDos.filter((todo) => todo.id !== action.payload),
    // };
    // 추가하기
    case ADD:
      return {
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
        //  이전 상태를 object 화 하여, 이전 상태와 현재상태가 같이 출력이 됨
        // toDos: [{ ...state.toDos }, { text: action.payload }],
        // ...state.toDos : toDos가 가지고 있는 정보를 가져온다.
        // todos : [{text:action.payload}] : todo 를 입력하는 순간, 단 하나의 todo만을 가진 array 를 보여준다.
        // [{...state.toDos}] : 이전 상태의 todos 정보를 가져온다.
      };
  }
};

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
            <button onClick={() => dispatch({ type: DEL, payload: todo.id })}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
