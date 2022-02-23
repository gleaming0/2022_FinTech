import Welcome from './components/Welcome';
import { useState } from "react"; //state hook을 import
import ListComponent from './components/ListComponent';

function App() {
  let username = "미입력";
  let [usernameWithState, setUsernameWithState] = useState("초기값");
  console.log(usernameWithState); //Console 출력 확인(리렌더링o)

  const handleInputChange = (e) => {
    setUsernameWithState(e.target.value);
    //console.log(username); //Console 출력 확인(리렌더링x)
  };

  return (
    <div>
      이름 : <input onChange={handleInputChange}></input>
      <h1>{usernameWithState}</h1>
      {/* {주석처리는 ctrl + /} */}
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;