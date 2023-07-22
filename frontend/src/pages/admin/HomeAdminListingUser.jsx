import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../../components/SearchBar";

function HomeAdminListingUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`
        );
        setUserList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="HomeAdminListingUser">
      <div className="search-bar-and-button-create">
        <SearchBar />
      </div>
      <ul className="user-list">
        {userList.map((user) => {
          return (
            <li className="user" key={user.user_id}>
              {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeAdminListingUser;
