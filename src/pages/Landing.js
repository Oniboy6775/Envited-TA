import React from "react";
import styled from "styled-components";
import IMG from "../images/image.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="row">
      <div className="welcome__desc col">
        <h3 className="title">
          Imagine if <br />
          <span>Snapchat</span>
          <br /> had events.
        </h3>
        <p className="desc">
          Easily host and share events with your friends across social media
        </p>
        <button
          className="btn btn-block show-btn show"
          onClick={() => navigate("create")}
        >
          🎉 Create my event
        </button>
      </div>{" "}
      <div className="welcome__img col">
        <img src={IMG} alt="" className="img" />
        <button
          className="btn btn-block show-btn"
          onClick={() => navigate("create")}
        >
          🎉 Create my event
        </button>
      </div>
    </Wrapper>
  );
};

export default Landing;
const Wrapper = styled.section`
  min-height: 100vh;
  background-color: var(--neutral-200);

  padding: 0.5rem 1rem;
  .img {
    box-shadow: var(--shadow-4);
    margin-bottom: 1rem;
  }
  .welcome__img {
    padding: 0.5rem 4rem 2rem 4rem;
  }
  .show {
    display: none;
  }
  .title {
    margin: 0;
    color: var(--primary-500);
    font-weight: 900;
    font-size: min(7vw, 6rem);
    text-transform: inherit;
    span {
      background-clip: text;
      background: -webkit-linear-gradient(
        90deg,
        #8456ec 24.2%,
        #e87bf8 120.46%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .welcome__desc {
    line-height: 1;
    text-align: center;
    padding: 2rem 0;
  }
  .desc {
    color: var(--primary-300);
  }
  @media (min-width: 800px) {
    align-items: center;

    .welcome__desc {
      order: 2;
    }
    .welcome__img {
      padding: 0 1rem;
      max-width: 300px;
      margin: auto;
    }
    .welcome__desc {
      width: 40%;
    }
    .show-btn {
      display: none;
    }
    .show {
      display: inline-flex;
    }
  }
`;
