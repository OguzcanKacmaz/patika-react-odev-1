import "./App.css";
import getData from "./app";
function App() {
  (async () => {
    const user = await getData(1);
    console.log(user);
  })();
  return <></>;
}

export default App;
