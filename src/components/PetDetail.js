import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const PetDetail = (props) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/pets/" + props.id)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { removeFromDom, pets, setPets } = props;

  const adoptPet = (petId) => {
    axios
      .delete("http://localhost:3500/api/pets/" + petId)
      .then((res) => removeFromDom(petId))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1>Pet Shelter</h1>
          <Link to="/pets">back to home</Link>
          <div>
            <p>
              <b>Details about: </b>
              {pet.name}
            </p>
          </div>
          <Link to="/pets">
            <button
              class="btn btn-primary"
              onClick={(e) => {
                adoptPet(pet._id);
              }}
            >
              Adopt: {pet.name}
            </button>
          </Link>
        </div>
        <div className="card-body" style={{ textAlign: "center" }}>
          <div>
            <p style={{marginRight: "50px"}}>
              <b style={{ marginRight: "150px" }}>Pet type:</b> {pet.type}
            </p>
          </div>
          <div>
            <p>
              <b style={{ marginRight: "125px" }}>Description: </b>{" "}
              {pet.description}
            </p>
          </div>
          <div>
            <p>
              <b style={{ verticalAlign: "top", marginRight: "135px" }}>
                Skills:
              </b>
              <div style={{ display: "inline-block" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>{pet.skill1}</li>
                  <li>{pet.skill2}</li>
                  <li>{pet.skill3}</li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
