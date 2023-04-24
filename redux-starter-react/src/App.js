import store from "./store";
import * as actions from "./actionTypes";

function App() {
  // Subscribing to the store (getting updates whenever the state changes)
  const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState());
  })

  // Dispatching Actions
  store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug 1"
    }
  })

  unsubscribe();

  store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
      id: 1
    }
  })

  return (
    <div className="App">
      <h1>Redux Starter</h1>
    </div>
  );
}

export default App;
