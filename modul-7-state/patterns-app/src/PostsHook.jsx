import { useFetchData } from "./useFetchData";
export const PostsHook = ({ url }) => {
  const { data, loading, error } = useFetchData(url);

  if (loading) return <div>Ładowanie...</div>;
  if (error) return <div>Błąd: {error.message}</div>;

  return (
    <div>
      <h1>Posty</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
