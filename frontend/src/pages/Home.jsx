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

  return (
    <div className="HomeAdminListingtask">
      <div className="add-input">
        <InputForm
          state={newTasks}
          setter={setNewTasks}
          type="text"
          placeholder="Add task here..."
        />
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
