import React from "react";
import user from "../../../assets/user.png";
import location from "../../../assets/locate.svg";
import email from "../../../assets/email.svg";
import phone from "../../../assets/phone-call.svg";
import { UserLocation } from "./UserLocation";

interface UsersInfo {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

export const User: React.FC<UsersInfo> = (props) => {
  let hashTags: any[] = props.user.company.catchPhrase.split(" ");
  let mappedHashTags = hashTags.map((hashtag) => {
    return <p key={hashtag}>#{hashtag}</p>;
  });
  let phoneNumber: any[] = props.user.phone.split(" ");
  return (
    <div className="user">
      <div className="userItemHeader">
        <h3>User Info</h3>
      </div>
      <div className="userItem">
        <div className="userItemBody">
          <div className="bodyUserGeneral">
            <div className="userImage">
              <img src={user} alt="user icon super bank website" />
            </div>
            <div className="userMainInfo">
              <h2>{props.user.name}</h2>
              <div>
                <p className="workPlace">Company: {props.user.company.name} </p>
                <div className="usersHashtags">{mappedHashTags}</div>
              </div>
            </div>
          </div>
          <div className="bodyUserExtended">
            <div className="bodyUserContacts">
              <div className="usersPhone">
                <img src={phone} alt="users phone info icon" />
                <p>{phoneNumber[0]}</p>
              </div>
              <div className="usersEmail">
                <img src={email} alt="email icon message social network" />
                <p>{props.user.email}</p>
              </div>
              <div className="userHome">
                <img src={location} alt="user location find city" />
                <p>
                  {props.user.address.city}, {props.user.address.street}, {props.user.address.suite}
                  , {props.user.address.zipcode}
                </p>
              </div>
            </div>
            <div className="bodyUserMap">
              <UserLocation geo={props.user.address.geo} text={props.user.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
