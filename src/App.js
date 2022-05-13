import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import UserList from "./UserList";
import './App.css';



function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <>
      <div>
        {/* {3,4장} */}
        {/* {중괄호로 감싸지 않으면 화면에 보입니다. 주석은 화면에 보이지 않습니다} */}
        <Hello
          // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
        />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </div>
      
      <div>
        {/* {5,6장} */}
        <Hello name="react"/>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
        <Wrapper>
          <Hello name="react" color="red"/>
          <Hello color="pink"/>
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello color="pink"/>
          <Hello name="react" color="red" isSpecial/>
        </Wrapper>
      </div>

      <div>
        {/* 7장 */}
        <Counter/>
      </div>

      <div>
        {/* 8,9,10장 */}
        <InputSample/>
        <InputSample2/>
      </div>
      <div>
        {/* 11장 */}
        <UserList/>
      </div>

    </>
  );
}

export default App;