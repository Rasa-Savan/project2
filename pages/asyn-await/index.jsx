import { useEffect } from "react";
function AsyncAwait() {
  useEffect(() => {
    fetchData();

    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
    }
  }, []);

  return (
    <div>
      <h1>pls check data in console log</h1>
    </div>
  );
}
export default AsyncAwait;
