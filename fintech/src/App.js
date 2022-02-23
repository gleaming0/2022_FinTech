import Welcome from './components/Welcome';
import { useState } from "react"; //state hook을 import
import ListComponent from './components/ListComponent';
import HeaderWhite from './components/HeaderWhite';

function App() {
  return (
    <div>
      <HeaderWhite title="메인" />
      <ListComponent></ListComponent>
    </div>
  );
}

export default App;