import React, { useReducer, useState } from "react";

// 초기 값
const initialState = {
  toDos: [],
};

// 액션 타입 선언
const ADD = "add";

// reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    // 추가하기
    case ADD:
      return {
        toDos: [...state.toDos, { text: action.payload }],
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
        {state.toDos.map((v, i) => (
          <li key={i}> {v.text}</li>
        ))}
      </ul>
    </>
  );
}
