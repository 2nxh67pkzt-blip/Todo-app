import { useState } from "react";
import type { Todo } from "../../types/types";

// export type TaskItem = {
//   id: number
//   title: string
//   created: string
//   completed: boolean
//   isEditing: boolean
// }

type TaskProps = {
  task: Todo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function Task({ task, onToggle, onEdit, onDelete }: TaskProps) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />

        <label>
          <span className="description">{task.task}</span>
          <span className="created">{task.createdAt.toString()}</span>
        </label>

        <button className="icon icon-edit" onClick={onEdit} />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
    </li>
  );
}

type TaskEditingProps = {
  task: Todo;
  onSave: (title: string) => void;
  onCancel: () => void;
};

export function TaskEditing({ task, onSave, onCancel }: TaskEditingProps) {
  const [title, setTitle] = useState(task.task);

  return (
    <li className="editing">
      <input
        type="text"
        className="edit"
        value={title}
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") onSave(title);
          if (event.key === "Escape") onCancel();
        }}
      />
    </li>
  );
}
