import React, { createContext, useState } from "react";

// context: 어플리케이션의 데이터 저장소

// 1. context 생성
export const UserContext = createContext();

// 2. provider 생성
// UserContextProvider를 호출하는 comp은 해당 태그로 둘러쌓이게 될것이다.

// 해당 provider 의 모든 children은 해당 user.name에 접근 권한이 생김
// {} 를 하면 render 가 되지 않음 .
// 따라서, () 를 통해 redner 가능하거나 중괄호 안에 return ()을 사용

// const UserContextProvider = ({ children }) => (
//   <UserContext.Provider value={{ name: "minsu" }}>
//     {children}
//   </UserContext.Provider>
// );

// 다른 방법
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Minsu",
    loggedIn: false,
  });

  // ...user 부분이 존재하지 않는다면, 새로운 state 가 적용되므로 name 이 사라짐
  const logUserIn = () => setUser({ ...user, loggedIn: true });

  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
