import { v4 as uuidv4 } from "uuid";

import { ADD, UNCOMPLETE, COMPLETE, DEL } from "./actions";
// 초기 값
export const initialState = {
  toDos: [],
  completed: [],
};

// 액션 타입 선언

// reducer 함수
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case UNCOMPLETE:
      const atarget = state.completed.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((todo) => todo.id !== action.payload),
        toDos: [...state.toDos, { ...atarget }],
      };
    case COMPLETE:
      // find 는 각 ele 에 한번씩 function 을 실행
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    // 삭제하기
    //  이전에 가져온 todos 에 정보를 가져온다.
    // filter 를 이용하여, true 면 살리고 false 죽인다.
    //  즉, current 와 target 이 다른 것만 살리고 , 같은것만 지운다.
    case DEL:
      return {
        ...state,
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
        // 이전 상태를 추가하는 구문
        // ...state를 하지 않는다면, completed가 undefiend가 되므로 추가해야함
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
        //  이전 상태를 object 화 하여, 이전 상태와 현재상태가 같이 출력이 됨
        // toDos: [{ ...state.toDos }, { text: action.payload }],
        // ...state.toDos : toDos가 가지고 있는 정보를 가져온다.
        // todos : [{text:action.payload}] : todo 를 입력하는 순간, 단 하나의 todo만을 가진 array 를 보여준다.
        // [{...state.toDos}] : 이전 상태의 todos 정보를 가져온다.
      };
  }
};

export default reducer;
