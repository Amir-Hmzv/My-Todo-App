import { useEffect, useState } from "react";
import Content from "./components/Content";
import FormInput from "./components/FormInput";
import { PlusIcon } from "@heroicons/react/24/solid";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className=" text-center m-auto ">
        <h1 className="text-blue-500 text-6xl mt-10 font-bold  ">
          My Todo App
        </h1>
        <FormInput
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Content setTodos={setTodos} todos={todos} />
      </div>
    </>
  );
}

export default App;
