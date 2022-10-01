import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import IMG from "../images/birthday.png";
import { GrNext } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const {
    eventName,
    eventStart,
    eventEnd,
    eventLocation,
    eventImg,

    eventHostName,
    handleChange,
  } = useAppContext();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    handleChange({ name: "isEditing", value: true });
    navigate("/create");
  };
  const start = eventStart ? moment(eventStart).format("DD MMMM, h:mm A") : "";
  const end = eventEnd
    ? moment(eventEnd).utc().local().format("DD MMMM, h:mm A")
    : "";

  return (
    <Wrapper className="row">
      <div className="image__container col">
        <img src={eventImg || IMG} alt="" className="img" />
      </div>
      <div className="event__details container col">
        <h2 className="event__name">{eventName || "Birthday Bash"}</h2>
        <span className="event__host">
          Hosted by{" "}
          <span className="main__name">{eventHostName || "Abdullahi"}</span>{" "}
        </span>
        {/* INFO */}
        <div className="event__info">
          <div className="event__icon">
            <FaRegCalendarAlt />
          </div>
          <div className="details">
            <p className="main__info">{start || "18 August 6:00PM"}</p>
            <p className="more__info">to {end || "19 August 6:00PM UTC+10"} </p>
          </div>
          <div className="next__icon">
            <GrNext />
          </div>
        </div>
        {/* LOCATION */}
        <div className="event__info">
          <div className="event__icon">
            <GoLocation />
          </div>
          <div className="details">
            <p className="main__info">Street name</p>
            <p className="more__info">
              {eventLocation || "Ilorin, Kwara, Nigeria"}
            </p>
          </div>
          <div className="next__icon">
            <GrNext />
          </div>
        </div>
        <button className="btn btn-block" onClick={handleEdit}>
          ✏️ Edit event
        </button>
        {/* <button type="submit" className="btn btn-block" onClick={() => {}}>
          Share event
        </button> */}
      </div>
    </Wrapper>
  );
};

export default Events;
const Wrapper = styled.div`
  .event__details {
    padding-top: 2rem;
  }
  .event__name {
    margin-bottom: 0;
  }
  .event__host {
    color: var(--neutral-500);
  }
  .main__name {
    color: var(--neutral-600);
  }
  .image__container {
    max-height: 500px;
  }
  .img {
    max-height: 50vh;
  }
  .event__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.5;
    padding-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .event__icon,
  .next__icon {
    color: var(--primary-200);
  }
  .event__icon {
    background-color: #fff;
    padding: 1rem;
    margin-right: 1.2rem;
    border-radius: var(--borderRadius);
  }
  .details {
    width: 100%;
    font-weight: 500;
  }
  .main__info {
    font-size: 1.5rem;
  }
  .more__info {
    color: var(--neutral-500);
  }
  .btn {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 800px) {
    width: 90%;
    margin: auto;
    gap: 5rem;
    padding-top: 3rem;
    .image__container {
      order: 2;
      max-height: 100%;
    }
  }
`;
