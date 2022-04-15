import React from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm";


let initialValues = {
    make: "",
    model: "",
    year: "",
};

const AddCarPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewCar)

    async function postNewCar () {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/cars/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Make:{" "}
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Model:{" "}
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Year:{" "}
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </label>
            <button>Add Car!</button>
          </form>
        </div>
      );
 }
export default AddCarPage