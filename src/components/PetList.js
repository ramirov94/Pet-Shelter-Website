import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const PetList = (props) => {
  //   const [pets, setPets] = useState([]);

  const { pets, setPets, pet, setPet } = props;

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/pets")
      .then((res) => setPets(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <div className="card-body">
          <h1 style={{ display: "inline" }} className="card-title p-5">
            Pet Shelter
          </h1>{" "}
          <Link style={{ display: "inline" }} to="/pets/create">
            add a pet to the shelter
          </Link>
          <h3 className="card-subtitle mt-3 mb-3 text-muted">
            These pets are looking for a good home
          </h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            {pets.map(({ _id, name, type }) => (
              <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                  <div>
                    <Link to={"/pets/" + _id}>details</Link> |{" "}
                    <Link to={"/pets/" + _id + "/edit"}>edit</Link>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PetList;
