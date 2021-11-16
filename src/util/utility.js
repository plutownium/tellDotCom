import Todo from "../components/card/Card";

function formatTodoData(rawFormatTodos, showOnly) {
  let formattedTodos = [];
  console.log(5, rawFormatTodos, formattedTodos);
  rawFormatTodos.forEach((todo) => {
    // console.log(7, todo);
    if (showOnly === "all") {
      console.log("all!", todo);
      formattedTodos.push(
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      );
    } else if (showOnly === "active") {
      console.log("active!", showOnly, todo.completed);
      if (todo.completed === false) {
        formattedTodos.push(
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      }
    } else if (showOnly === "completed") {
      console.log("completed!", showOnly, todo.completed);
      if (todo.completed === true) {
        formattedTodos.push(
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
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
