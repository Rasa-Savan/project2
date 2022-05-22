import React, { useEffect, useState } from "react";

function JsonPlaceHolder() {
  const [dataBook, setDataBook] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setDataBook(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {dataBook.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonPlaceHolder;
