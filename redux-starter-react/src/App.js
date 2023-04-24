import store from "./store";
import { bugAddedAction, bugRemovedAction, bugResolvedAction } from "./actions";

function App() {
  // Subscribing to the store (getting updates whenever the state changes)
  const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState());
  })

  // Dispatching Actions
  store.dispatch(bugAddedAction("Bug 1"));

  // unsubscribe();

  store.dispatch(bugResolvedAction(1));
  store.dispatch(bugRemovedAction(1));

  return (
    <div className="App">
      <h1>Redux Starter</h1>
    </div>
  );
}

export default App;
