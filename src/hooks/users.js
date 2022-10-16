import axios from "axios";
import { useQuery } from "react-query";

// Accept activePage as a parameter from App.js
export const useUsers = (activePage) => {
  return useQuery(
    // Add activePage as a dependency
    ["users", activePage],
    async () => {
      const { data } = await axios.get(
        // Change page number to the activePage param received
        `https://reqres.in/api/users?page=${activePage}`
      );

      return data;
    },
    // This tells React-Query that this is Query is part of
    // a paginated component
    { keepPreviousData: true }
  );
};
