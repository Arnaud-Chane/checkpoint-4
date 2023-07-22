import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserInfoContext } from "../context/UserInfoContext";

function Home() {
  const { userInfo } = useContext(UserInfoContext);

  const [userId, setUserId] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setUserId(userInfo.userId);
  }, []);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}/tasks`
        );
        setTaskList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
  }, [userId]);

  return (
    <div className="HomeAdminListingtask">
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
