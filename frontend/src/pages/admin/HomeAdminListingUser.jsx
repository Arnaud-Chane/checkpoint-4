import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../../components/SearchBar";

function HomeAdminListingUser() {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  const searchListFilter = userList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.email.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div className="HomeAdminListingUser">
      <div className="search-bar-and-button-create">
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </div>
      <ul className="user-list">
        {searchListFilter.map((user) => {
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
