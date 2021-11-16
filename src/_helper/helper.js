function getTodos() {
  const apiURL = "https://jsonplaceholder.typicode.com/todos";
  return fetch.get(apiURL);
}

export default getTodos;
