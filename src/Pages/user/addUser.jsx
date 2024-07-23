import React, { useState } from "react";
import { postData } from "../../services/api";
import useSWR, { mutate } from "swr";
import { useNavigate } from "react-router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AddUser = () => {
  const { data, error } = useSWR("http://localhost:3001/data", fetcher);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    function: "",
    review: "Positive",
    email: "",
    date: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = () => {
        setFormData({ ...formData, file: fileReader.result });
      };
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData)
      .then((res) => {
        if (res.status === 201) {
          mutate("http://localhost:3001/data");
          Object.entries(formData).forEach(([key, value]) => {
            setFormData({ ...formData, [key]: "" });
          });
        }
      })
      .then(navigate("/"));
  };

  return (
    <div className="admin__section ">
      <h1 className="text-[35px] font-bold">Add User</h1>

      <form className="admin__form">
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="custominput"
        />
        <input
          value={formData.function}
          onChange={handleChange}
          type="text"
          name="function"
          placeholder="Enter function"
          className="custominput"
        />

        <select
          name="review"
          className="custominput"
          value={formData.review}
          onChange={handleChange}
        >
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
        </select>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter Email"
          className="custominput"
        />
        <input
          name="date"
          type="date"
          className="custominput"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          name="file"
          type="file"
          className="custominput"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} type="submit" className="custom__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
