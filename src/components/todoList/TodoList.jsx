import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../../store/slice/todo/todoSlice';
import { useState } from 'react';
import './TodoList.css';

export default function TodoList() {
  const listTask = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);

  function modifyTask(e, task, id) {
    editable ? setEditable(false) : setEditable(true);
    const newTask =
      e.target.previousElementSibling.previousElementSibling.textContent;

    if (newTask !== task) {
      dispatch(updateTask({ newTask, id }));
    }
  }

  return (
    <ul className="listTask">
      {listTask.map(({ task, id }) => (
        <li key={id} className="listTask__task">
          <p contentEditable={editable} className="task__info">
            {task}
          </p>
          <button
            onClick={() => dispatch(deleteTask(id))}
            className="task__btn task__btn-delete"
          >
            x
          </button>
          <button
            onClick={(e) => modifyTask(e, task, id)}
            className="task__btn task__btn-modify"
          >
            m
          </button>
        </li>
      ))}
    </ul>
  );
}
