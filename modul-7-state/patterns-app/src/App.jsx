import { FetchData } from "./FetchData";
import { FetchDataChildren } from "./FetchDataChildren";
import { Posts } from "./Posts";

const url = "https://jsonplaceholder.typicode.com/posts";
function App() {
  return (
    <>
      <FetchData url={url} />
      <FetchDataChildren url={url} />
      <Posts url={url} />
    </>
  );
}

export default App;
