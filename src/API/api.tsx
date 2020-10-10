import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const UsersAPI = {
  getUsers() {
    return instance.get(`users`).then((response) => {
      return response.data;
    });
  },
};
