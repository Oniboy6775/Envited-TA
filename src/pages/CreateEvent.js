import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import IMG from "../images/birthday.png";
import FormInput from "../components/FormInput";
import { useAppContext } from "../context/appContext";

const CreateEvent = () => {
  const {
    handleChange,
    eventName,
    eventStart,
    eventEnd,
    eventLocation,
    eventUrl,
    eventDesc,
    eventHostName,
    eventImg,
    isEditing,
  } = useAppContext();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    handleChange({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange({ name: "isEditing", value: false });
    navigate("/event");
  };
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    handleChange({ name: "eventImg", value: newImageUrls[0] });
    // eslint-disable-next-line
  }, [images]);

  return (
    <Wrapper className="container">
      <header>
        <span className="cancel" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </span>
        <div className="avatar">
          <BsPersonCircle />
        </div>
      </header>

      <h3 className="title">Create your event</h3>
      <div className="create__event__container row ">
        <div className="upload__image__container col">
          <img src={eventImg || IMG} alt="" className="img" />
          <div className="camera__container ">
            <div>
              {(!eventImg || isEditing) && (
                <>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <input
                      className="input-img"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      placeholder="choose a file"
                      id="file-upload"
                    />
                    <FaCamera className="camera__icon" />
                    <p>choose a photo</p>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form col">
          <FormInput
            name="eventHostName"
            value={eventHostName}
            label="👤 My name"
            onChange={handleInputChange}
            type="text"
            required
          />
          <FormInput
            name="eventName"
            value={eventName}
            label="🎉 My event is called"
            onChange={handleInputChange}
            type="text"
            required
          />
          <FormInput
            name="eventStart"
            value={eventStart}
            label="🗓 It starts at"
            type="date"
            required
          />
          <FormInput
            name="eventEnd"
            value={eventEnd}
            label="🏁 It ends at "
            type="date"
            minDate={eventStart}
          />
          <FormInput
            name="eventLocation"
            value={eventLocation}
            label="📍 It's happening at "
            onChange={handleInputChange}
            type="text"
            placeholder="Location"
            required
          />
          <FormInput
            name="eventUrl"
            value={eventUrl}
            label="🔗 Add a URL "
            onChange={handleInputChange}
            type="text"
            placeholder="URL"
          />
          <FormInput
            name="eventDesc"
            value={eventDesc}
            label="✏️ Description "
            onChange={handleInputChange}
            type="text"
            showTimeSelect
            dateFormat="Pp"
          />

          <button type="submit" className="btn btn-block">
            Next
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default CreateEvent;

const Wrapper = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    .cancel,
    .avatar {
      font-size: 2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .title {
    text-align: left;
    font-weight: 500;
    color: var(--primary-500);
  }

  .icon {
    padding: 0.2rem 0.2rem 0rem;
    background-color: var(--primary-200);
    border-radius: var(--borderRadius);
    svg {
      font-size: 2rem;
    }
    &:hover {
      background-color: var(--primary-400);
      color: var(--white);
    }
  }
  .img {
    --max-width: 300px;
    /* max-width: var(--max-width); */
    max-height: calc(var(--max-width) / 10vh);
    margin: auto;
  }
  .create__event__container {
    gap: 1rem;
  }

  .upload__image__container {
    margin-bottom: 1rem;
    position: relative;
    padding: 1.2rem;
    cursor: pointer;
  }
  .camera__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1;
    color: var(--white);
  }
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .camera__icon {
    font-size: 6rem;
    color: var(--white);
  }

  .input-img {
    opacity: 0;
  }
  .custom-file-upload {
    /* border: 1px solid #ccc; */
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    .upload__image__container {
      order: 2;
    }
  }
`;
