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

- onClick={() => func} 과 onClick = {handleClick}차이 ???

# Adding To Dos

- e.preventDefault() : 아무것도 안한다
- 직접적으로 todos :
  - [] 의 push 를 하는건 오류를 발생한다. -> 직접 array 를 수정
  - (immutable 유지 필요 )
- 기존의 있는 배열을 수정하는 것이 아니다.
- 새로운 것으로 대체를 한다.
  - 이전의 상태를 가지고, 새로운 것을 추가한다. -> anti mutation = imuutable
- state 를 변화 시키지 않는다.

# Deleting To Dos

- vscode emoji 설치
- span , p 태그의 차이
- uuid 를 이용해서 배열 id 유일성 만들기
- filter 배열 메소드를 이용해서, 조건에 맞으면 살리고, 않으면 죽인다.
- 해당 부분은 id 가 맞지않으면, 살리는 거기 때문에, id 가 같은 부분만 죽인다.

# Completing To Dos

- app.js 에서 reducer.js 로 로직 분리
- completed 라는 새로운 배열을 추가하여, 상태관리 메소드 추가
- ...state와 find 메소드를 이용하여, todos -> completed 로 이동

# Uncompleting To Dos

- reducer 에 complete 로직을 반대로 이용하여 uncomplete 로직을 구현
- 이로써, 하나의 기능을 만들어서, 재 사용 하는 방법을 이용하면, 생산성이 증대되는 상황을 겪음.
- 하나의 선으로 먼저 기능을 만들고, 분리하여, 재사용하는 방법을 기본 골자로 이용하는 방법을 하자

# Refactoring with Context

- 재구조화 : 새롭게 comp를 쪼개고, 기능을 재구축한다.
- 여기서는 context와 redux를 결합하는 방식으로
