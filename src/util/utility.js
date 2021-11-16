import Todo from "../components/card/Card";

function formatTodoData(rawFormatTodos, showOnly) {
  let formattedTodos = [];
  console.log(5, rawFormatTodos, formattedTodos);
  rawFormatTodos.forEach((todo) => {
    console.log(7, todo);
    if (showOnly === "all") {
      formattedTodos.push(
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          todoBaz={todo.completed}
        />
      );
    } else if (showOnly === "active") {
      if (todo.completed === "false") {
        formattedTodos.push(
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            todoBaz={todo.completed}
          />
        );
      }
    } else if (showOnly === "completed") {
      if (todo.completed === "true") {
        formattedTodos.push(
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            todoBaz={todo.completed}
          />
        );
      }
    } else {
      throw "You shouldn't be able to get here you know...";
    }
  });

  console.log(17, formattedTodos);
  return formattedTodos;
}

export default formatTodoData;
