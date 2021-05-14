import React from "react";

export const Incomplete = (props) => {
  const {
    inCompleteTodoText,
    deleteTodo,
    addTodo,
    completeTodoText,
    setCompleteTodoText,
    setInCompleteTodoText
  } = props;
  return (
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
                  deleteTodo(index, inCompleteTodoText, setInCompleteTodoText);
                  //追加処理
                  addTodo(completeTodoText, todo, setCompleteTodoText);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  //削除処理
                  deleteTodo(index, inCompleteTodoText, setInCompleteTodoText);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
