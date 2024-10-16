import { FetchData } from "./FetchData";
import { FetchDataChildren } from "./FetchDataChildren";
import Posts, { PostsView } from "./Posts";
import { PostsHook } from "./PostsHook";

const url = "https://jsonplaceholder.typicode.com/posts";
function App() {
  return (
    <>
      <Posts url={url} />
      <PostsHook url={url} />
      <FetchData url={url} render={(props) => <PostsView {...props} />} />
      <FetchDataChildren url={url}>
        {(props) => <PostsView {...props} />}
      </FetchDataChildren>
    </>
  );
}

export default App;
