import { Button } from "antd";
import { proxy, useSnapshot } from "valtio";

const state = proxy({ count: 0, text: "hello" });
function App() {
  function name(params) {
    setInterval(() => {
      ++state.count;
      console.log(`111---state.count:`, state.count);
    }, 1000);
  }
  const snap = useSnapshot(state);
  return (
    <div>
      <h1>Test2</h1>

      <Button type="primary" onClick={name}>
        点击我222222
      </Button>

      {/* <h1>{snap.count}</h1> */}
      <h1>{state.count}</h1>
    </div>
  );
}

export default App;
