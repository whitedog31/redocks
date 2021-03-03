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
