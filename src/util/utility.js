import Todo from "../components/card/Card";

function formatTodoData(rawFormatTodos) {
  let formattedTodos = [];
  rawFormatTodos.forEach((todo) => {
    return (
      <Todo
        key={todo.id}
        title={todo.title}
        userId={todo.userId}
        todoBaz={todo.completed}
      />
    );
  });
  return formattedTodos;
}

export default formatTodoData;
