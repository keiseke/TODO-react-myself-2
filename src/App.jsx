//これはテストです
import "./styles.css";
import { useState } from "react";

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
      <div className="inputArea">
        <input
          placeholder="TODOを入力"
          value={todoText}
          disabled={cntFlg}
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
        />
        <button onClick={add} disabled={cntFlg}>
          追加
        </button>
      </div>
      {cntFlg && <p className="alert">５個までしか登録できません！</p>}
      <div className="incompleteArea">
        <p>未完了のTODO</p>
        <ul>
          {inCompleteTodoText.map((todo, index) => {
            return (
              <div key={todo} className="listRow">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    //削除処理
                    deleteTodo(
                      index,
                      inCompleteTodoText,
                      setInCompleteTodoText
                    );
                    //追加処理
                    addTodo(completeTodoText, todo, setCompleteTodoText);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    //削除処理
                    deleteTodo(
                      index,
                      inCompleteTodoText,
                      setInCompleteTodoText
                    );
                  }}
                >
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="completeArea">
        <p>完了のTODO</p>
        <ul>
          {completeTodoText.map((todo, index) => {
            return (
              <div key={todo} className="listRow">
                <li>{todo}</li>
                <button
                  disabled={cntFlg}
                  onClick={() => {
                    //削除処理
                    deleteTodo(index, completeTodoText, setCompleteTodoText);
                    //追加処理
                    addTodo(inCompleteTodoText, todo, setInCompleteTodoText);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
