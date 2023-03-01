import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const Content = ({ todos, setTodos }) => {
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const handleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    const todo = todos.filter((todo) => todo.id !== id);

    setTodos(todo);
  };

  const handleChangeContent = (id, e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            content: e,
          };
        }
        return todo;
      })
    );
  };
  console.log(todos);

  return (
    <div className="flex  justify-center items-center flex-col   ">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`w-[95%] sm:w-[80%] ${
            todo.completed && "opacity-80"
          }  md:w-[40%] lg:w-[35%] xl:w-[25%]    flex justify-between space-x-3 items-center my-4 rounded-md bg-white px-5 py-2 h-auto `}
        >
          <label className="containerx flex items-center z-10">
            <input
              required
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(todo.id)}
            />
            <span className="checkmark"></span>
          </label>
          <div
            className={`max-w-[50%] h- text-justify ${
              todo.completed && "line-through"
            }`}
          >
            {!todo.edit ? (
              <p className="   break-words">{todo.content}</p>
            ) : (
              <input
                className=" p-1 "
                onChange={(e) => handleChangeContent(todo.id, e.target.value)}
                value={todo.content}
                autoFocus
                onBlur={() => handleEdit(todo.id)}
              />
            )}
          </div>
          <div className="flex space-x-2 z-50">
            <button
              onClick={() => handleEdit(todo.id)}
              className=" px-2 py-1  rounded-md bg-blue-500"
            >
              <PencilSquareIcon className="h-8 w-8  text-white" />
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className=" px-2 py-1 rounded-md bg-red-500"
            >
              <TrashIcon className="h-8 w-8 text-main " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
