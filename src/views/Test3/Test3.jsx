import { Button } from "antd";

function App() {
  function name(params) {
    setInterval(() => {
      BUS.count += 1;
      console.log("  BUS.count---:", BUS.count);
    }, 1111);
  }
  // const snap = useSnapshot(state);
  return (
    <div>
      <h1>Test3</h1>

      <Button type="primary" onClick={name}>
        点击我222222
      </Button>

      <h1>{BUS.count}</h1>
    </div>
  );
}

export default App;
