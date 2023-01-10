import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../store/slice/todo/todoSlice';
import "./AddTask.css"

export default function AddTask() {
  const infoReduce = useSelector((state) => state);
  const dispatch = useDispatch();
  function addTask(e) {
    e.preventDefault();
    const { newTask } = e.target;
    if (newTask.value === '') return;
    dispatch(createTask(newTask.value));
  }
  return (
    <form onSubmit={addTask} className="AddTask">
      <input type="text" name="newTask" id="task" className="AddTask__input" />
      <button type="submit" className="AddTask__btn">
        +
      </button>
    </form>
  );
}
