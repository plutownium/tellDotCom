function formatTodoData(rawFormatTodos) {
  let formattedTodos = [];
  rawFormatTodos.forEach((todo) => {
    return <Todo todoFoo={todo.foo} todoBar={todo.bar} todoBaz={todo.baz} />;
  });
  return formattedTodos;
}

export default formatTodoData;
