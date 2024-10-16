import TaskManager from "./TaskManager";
import ShoppingCart from "./ShoppingCart";
import UserDataManager from "./UserDataManager";
import ReactHookForm from "./ReactHookForm";
import { FetchData } from "./FetchData";

function App() {
  return (
    <>
      <FetchData />
      <hr style={{ margin: "50px" }} />
      <ReactHookForm />
      <hr style={{ margin: "50px" }} />
      <TaskManager />
      <ShoppingCart />
      <UserDataManager />
    </>
  );
}

export default App;
