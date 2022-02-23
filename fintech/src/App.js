/* Welcome이라는 컴포넌트 만들기! 프롭스(username, age) 사용!*/
const Welcome = (props) => {
  console.log(props);
  return (<div>안녕하세요. {props.age}세 {props.username}님 반갑습니다!</div>);
}

function App() {
  return (
    <div>
      <Welcome username="홍길동" age="22"></Welcome>
      <Welcome username="김아은" age="22"></Welcome>
    </div>
  );
}

export default App;
