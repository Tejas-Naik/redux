import store from "./store";
import customStore from "./customStore";
import { bugAddedAction, bugRemovedAction, bugResolvedAction } from "./actions";

// Custom Store
const cstore = customStore();
cstore.state = 1;
console.log(cstore.state);

function App() {
  // Subscribing to the store (getting updates whenever the state changes)
  const unsubscribe = store.subscribe(() => {
    // console.log("Store Changed", store.getState());
  })

  // Dispatching Actions
  store.dispatch(bugAddedAction("Bug 1"));

  // unsubscribe();

  store.dispatch(bugResolvedAction(1));
  store.dispatch(bugRemovedAction(1));

  // console.log(store);

  return (
    <div className="App">
      <h1>Redux Starter</h1>
    </div>
  );
}

export default App;
