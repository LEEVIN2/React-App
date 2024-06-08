import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

// React JS
// -- 새로운 데이터가 들어올 때마다 component와 UI를 refresh
// -- state를 변화시킬 때마다 component를 재실행

// useEffect();
// -- 가끔은 리랜더링 될때 component 내부의 몇몇 코드는 처음에 한번만 실행되고 다시는 실행되지 않도록 하고싶을때
//    또는 코드를 언제 실행시킬지 선택하려 할때 사용 (특정코드의 실행을 제한하는 기능)
// -- 2개의 argument를 가지는 function
//    first : 실행시키려는 코드
//    second : React JS가 지켜볼 요소로, 요소가 변화할때 코드를 실행시킴 (dependencise)
//             아무것도 없이 []일 경우 1번만 실행 / 배열 형태로 여러 요소를 넣을 수 있고, 요소 중 하나라도 값이 변하면 실행
// -- Cleanup function : component가 create될때 뿐만 아니라, destroy될때도 코드 실행 선택가능

function Hello() {
  // 아래랑 같은코드 
  // useEffect(function () {
  //   console.log("Hello! is create");
  //   return function () {
  //     console.log("Hello! is destroy");}},[]);
  useEffect(() => {
    console.log("Hello! is create");
    return () => console.log("Hello! is destroy");}, []);
  return <h1>Hello!</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  const [search, serSearch] = useState("");
  const [show, setShow] = useState(true);
  const onclickShow = () => setShow((currunt) => !currunt);
  const onclickPlus = () => setCount((currunt) => currunt+1);
  const onChange = (event) => serSearch(event.target.value);

  // useEffect 사용전 : search/count 값만 변해도 전체 리랜더링으로, 값이 변하지 않은 count/search도 함께 리랜더링
  // useEffect 사용후 : []안의 요소가 변해야 해당 코드를 실행
  useEffect(() => {console.log("Only Once!");}, []);
  useEffect(() => {console.log("count is change!");}, [count]);
  useEffect(() => {if(search !== "") console.log("search is change!");}, [search]);
  useEffect(() => {console.log("count or search is Change!");}, [count, search]); // 둘중 하나라도 값이 변하면 실행

  return (
    <div>
      <Button text={"Click"} />
      <hr/>
      <div>
        <input value={search} onChange={onChange} type="text" placeholder="Search" />
        <h1 className={styles.title}>{count}</h1>
        <button onClick={onclickPlus}>Plus</button>
      </div>
      <hr/>
      <div>
        {show ? <Hello /> : null}
        <button onClick={onclickShow}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;