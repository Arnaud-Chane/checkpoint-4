import { useState, useEffect } from "react";
import axios from "axios";

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

  console.info(userList);

  return <div>Admin page</div>;
}

export default HomeAdminListingUser;
