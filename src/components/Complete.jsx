import React from "react";

export const Complete = (props) => {
  const {
    completeTodoText,
    inCompleteTodoText,
    cntFlg,
    deleteTodo,
    addTodo,
    setCompleteTodoText,
    setInCompleteTodoText
  } = props;
  return (
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
  );
};
