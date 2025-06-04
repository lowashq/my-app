'use client';
import { useState } from 'react';

interface TaskItem {
  text: string;
  isDone: boolean;
}

export default function TaskTracker() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim()) {
      setTasks([...tasks, { text: newTaskText, isDone: false }]);
      setNewTaskText('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].isDone = !updated[index].isDone;
    setTasks(updated);
  };

  return (
    <div>
      <h2 className="mb-4">Task Tracker</h2>

      <div className="task-input">
        <input
          className="form-control"
          placeholder="Enter a new task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={addTask}
          disabled={!newTaskText.trim()}
        >
          Add Task
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={task.isDone}
                onChange={() => toggleTask(index)}
              />
              <span className={task.isDone ? 'task-done' : ''}>{task.text}</span>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="task-stats">
        Total tasks: {tasks.length}
        <br />
        Completed: {tasks.filter((t) => t.isDone).length}
      </p>
    </div>
  );
}
