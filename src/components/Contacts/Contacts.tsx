import React from "react";
import photoMembers from "../../images/loreal-model-risovannye-500423.jpg";
import "./contacts.css";
import useContacts from "./useContacts";

const Contacts: React.FC = () => {
  const { visibilityMembers } = useContacts();
  return (
    <div className="contacts-container">
      Our Team
      <div className="contacts-team">
        {visibilityMembers.map(({ name, email, city, phone }) => {
          return (
            <div className="team" key={phone}>
              <div>{name}</div>
              <div>{email}</div>
              <div>{city}</div>
              <div>{phone}</div>
              <img className="team-photo" src={photoMembers} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
