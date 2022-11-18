import './App.css';
import Count from "./count.js";

const Pushe = () => {
  console.log("計算");
}

function App() {
  let num=0;

  return (
    <div className='App-header'>
      <h1>
        冷やし中華
      </h1>
        <input type="text"></input>
        <input type="text"></input>
        <div>{num}</div>
      <button onClick={Pushe}>計算</button>
    </div>
  );
};

export default App;
