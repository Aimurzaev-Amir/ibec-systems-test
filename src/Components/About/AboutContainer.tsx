import React, { useEffect, useState } from "react";
import { UsersAPI } from "../../API/api";
import { About } from "./Components/About";

export const AboutContainer: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let setData = (data: any[]) => {
    setUsers((prev) => [...data, ...prev]);
  };
  useEffect(() => {
    let getUsers = async () => {
      setLoading(true);
      let data: any[] = await UsersAPI.getUsers();
      setData(data);
      setLoading(false);
    };
    getUsers();
  }, [setUsers]);

  return <About users={users} loading={loading} />;
};
