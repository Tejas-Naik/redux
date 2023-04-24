import store from "./store";

function App() {
  console.log(store.getState());

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug 1"
    }
  })

  return (
    <div className="App">
      <h1>Redux Starter</h1>
    </div>
  );
}

export default App;
