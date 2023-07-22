import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserInfoContext } from "../context/UserInfoContext";
import InputForm from "../components/InputForm";

function Home() {
  const { userInfo } = useContext(UserInfoContext);

  const [taskList, setTaskList] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${
            userInfo.userId
          }/tasks`
        );
        setTaskList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
  }, []);

  const handleSubmit = async () => {
    const body = {
      name: newTasks,
      user_id: userInfo.userId,
      task_done: 0,
      task_archived: 0,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/tasks`,
        body
      );
      if (response.status === 201) {
        console.info("Task added to db");
        setNewTasks("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="HomeAdminListingtask">
      <div className="add-input">
        <InputForm
          state={newTasks}
          setter={setNewTasks}
          type="text"
          placeholder="Add task here..."
        />
        <button
          className="add-task-btn"
          type="submit"
          onClick={() => handleSubmit()}
        >
          +
        </button>
      </div>

      <ul className="task-list">
        {taskList.map((task) => {
          return (
            <li className="task" key={task.task_id}>
              {task.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
