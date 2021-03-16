import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

// 1
// 따로 따로 두개를 적는것도 나쁘지는 않지만, 코드량이 많기 때문에 하나로 줄이는 방법을 이용한다.

// export const useToDos = () => {
//   const {
//     state: { toDos },
//   } = useContext(ToDosContext);
//   return toDos;
// };

// export const useCompleted = () => {
//   const {
//     state: { completed },
//   } = useContext(ToDosContext);
//   return completed;
// };

// 2
export const useState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export default ToDosProvider;
