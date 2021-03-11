#초보 REACT

# useContext in Action

- pros 를 전달하는 방법은 좋은 방법이 아님
- 부모 -> 자식 컴포넌트로 전달 시, 사용하지 않는 Comp에 전달하는 문제가 발생하기 때문

> 따라서, 상태관리 를 쓰는 이유이다.

- context, redux ...

# Recap and Improvements

- useContext를 이용하여 Provider 라는 부모 Comp을 만들어 전역적 상태관리 가능
- 하지만 Home, Screen의 중복적으로 useContexnt 를 사용
  -> 해당 부분을 줄일수 있지 않을까 ?
- property 와 func 을 전닯 받을 수 있다 .
- User가 실행 할ㄸ 마다, 자동으로 수행되는 함수를 만든다.

# Building Hypertranslate part

- 버튼 클릭 시, 번역하는 간단 기능 구현

# Understanding useReducer

- useReducer 를 쓰는 이유가 무엇일가

* comp가 엄청난 수의 state 를 가지고 있거나, 더 나은 방향으로 state 를 관리하기 위해서이다.

- reducer 에 정확한 정의가 무엇일까 ?
  reducer 를 통해 return 되는 state 는 comp내의 state 값을 변경한다.

- 우리가 return 할 object 는 state 를 대체하게 된다.
  - 변경, 조작, 추가가 아닌 replace 라는것을 참조
- useReducer 가 reducer 함수를 call 한다.
- useReducer(reducer 함수, 초기 state )

- useStatet 가 state, setState 를 제공하는 것처럼
- useReducer는 state dispatch 를 제공

- dispatch 는 state 를 replace를 할수 잇는 action 함수를 실행
  즉, reducer 에 함수를 실행 가능하게 해주는 점

- onClick={() => func} 과 onClick = {handleClick}차이

# Adding To Dos
