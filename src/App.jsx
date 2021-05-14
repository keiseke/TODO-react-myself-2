import "./styles.css";
import { useState } from "react";
import { Input } from "./components/Input";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";

export const App = () => {
  /* =====State定義===== */
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodoText, setInCompleteTodoText] = useState([]);
  const [completeTodoText, setCompleteTodoText] = useState([]);

  /* =====関数===== */
  //追加ボタン押下時の処理
  const add = () => {
    if (todoText === "") return;
    addTodo(inCompleteTodoText, todoText, setInCompleteTodoText);
    setTodoText("");
  };
  //削除処理
  const deleteTodo = (index, array, setter) => {
    const newTodos = [...array];
    newTodos.splice(index, 1);
    setter(newTodos);
  };
  //追加処理
  const addTodo = (arrayTodo, addText, setter) => {
    const todoContent = [...arrayTodo, addText];
    setter(todoContent);
  };
  const cntFlg = inCompleteTodoText.length > 4;

  return (
    <div className="App">
      <Input
        todoText={todoText}
        cntFlg={cntFlg}
        add={add}
        setter={setTodoText}
      />
      {cntFlg && <p className="alert">５個までしか登録できません！</p>}
      <Incomplete
        inCompleteTodoText={inCompleteTodoText}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        completeTodoText={completeTodoText}
        setCompleteTodoText={setCompleteTodoText}
        setInCompleteTodoText={setInCompleteTodoText}
      />
      <Complete
        completeTodoText={completeTodoText}
        inCompleteTodoText={inCompleteTodoText}
        cntFlg={cntFlg}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        setCompleteTodoText={setCompleteTodoText}
        setInCompleteTodoText={setInCompleteTodoText}
      />
    </div>
  );
};
