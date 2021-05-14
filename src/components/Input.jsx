import React from "react";

export const Input = (props) => {
  const { todoText, cntFlg, add, setter } = props;
  return (
    <div className="inputArea">
      <input
        placeholder="TODOを入力"
        value={todoText}
        disabled={cntFlg}
        onChange={(event) => {
          setter(event.target.value);
        }}
      />
      <button onClick={add} disabled={cntFlg}>
        追加
      </button>
    </div>
  );
};
