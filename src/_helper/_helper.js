function getTodos() {
  const apiURL = "https://jsonplaceholder.typicode.com/todos";
  return fetch(apiURL);
}

export default getTodos;
