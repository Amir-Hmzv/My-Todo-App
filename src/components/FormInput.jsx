import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const FormInput = ({ inputText, setInputText, todos, setTodos }) => {
  const addTodo = () => {
    inputText &&
      setTodos((prev, index) => [
        ...prev,
        {
          id: Math.random() * 10 + 3,
          content: inputText,
          completed: false,
          edit: false,
        },
      ]);

    setInputText("");
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      inputText && setTodos((prev, index) => [
        ...prev,
        {
          id: Math.random() * 10 + 3,
          content: inputText,
          completed: false,
          edit: false,
        },
      ]);
    }
  };

  return (
    <div className="my-20 ">
      <div className="">
        <input
          type={"text"}
          className="py-2 px-4 placeholder:text-gray-500 grow md:w-1/3   outline-none rounded-md shadow-lg shadow-complement "
          placeholder="type your todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeydown}

        />
        <button
          onClick={addTodo}
          className="rounded-md p-2      "
        >
          <PlusIcon className="h-10 w-10 bg-blue-500 text-white rounded-md relative top-3  " />
        </button>
      </div>
    </div>
  );
};

export default FormInput;
