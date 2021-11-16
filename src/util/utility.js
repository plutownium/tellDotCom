import Todo from "../components/card/Card";

function formatTodoData(rawFormatTodos) {
  let formattedTodos = [];
  console.log(5, rawFormatTodos, formattedTodos);
  rawFormatTodos.forEach((todo) => {
    console.log(7, todo);
    formattedTodos.push(
      <Todo
        key={todo.id}
        title={todo.title}
        userId={todo.userId}
        todoBaz={todo.completed}
      />
    );
  });

  console.log(17, formattedTodos);
  return formattedTodos;
}

export default formatTodoData;
