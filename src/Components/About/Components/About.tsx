import React from "react";
import "./About.scss";
import { User } from "./User";
import loading from '../../../assets/2.gif';

interface UsersProps {
  users: any[];
  loading: boolean;
}

export const About: React.FC<UsersProps> = (props) => {
  let usersGrid = props.users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <div className="usersGrid">{props.loading ? <div className="loading">
      <img src={loading} alt=""/>
    </div> : usersGrid}</div>
  );
};
