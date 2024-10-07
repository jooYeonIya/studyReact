import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  console.log("아이템이 다시 계산 랜더링")

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoIte);

// export default memo(TodoItem, ( prev, curr ) => {
//   if (prev.id != curr.id) return fasle
//   if (prev.isDone != curr.isDone) return fasle
//   if (prev.content != curr.content) return fasle
//   if (prev.date != curr.date)  return fasle 
//   else return true 
// });
