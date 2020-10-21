import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const NewPet = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errs, setErrs] = useState({});

  const createPet = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/api/pets", {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrs(res.data.errors);
        } else {
          navigate("/pets");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="card-header" style={{ textAlign: "center" }}>
        <h1>Pet Shelter</h1>
        <Link
          style={{
            marginBottom: "20px",
          }}
          to="/pets"
        >
          back to home
        </Link>
        <h3>Know a pet needing a home?</h3>
      </div>
      <form onSubmit={createPet}>
        <div className="card-body">
          <div style={{ display: "inline-block", marginRight: "45px" }}>
            <div style={{ marginBottom: "10px" }}>
              <div>
                <label>
                  <h6>Pet Name:</h6>
                </label>
              </div>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              {errs.name ? <p>{errs.name.message}</p> : null}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>
                <label>
                  <h6>Pet Type:</h6>
                </label>
              </div>
              <input
                type="text"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              {errs.type ? <p>{errs.type.message}</p> : null}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>
                <label>
                  <h6>Pet Description:</h6>
                </label>
              </div>
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              {errs.description ? <p>{errs.description.message}</p> : null}
            </div>
            <button type="submit" className="btn btn-primary">
              Add Pet
            </button>
          </div>
          <div
            style={{
              display: "inline-block",
              marginRight: "45px",
              verticalAlign: "top",
            }}
          >
            <h4>Skills (optional)</h4>
            <div>
              <div>
                <label>Skill 1:</label>
              </div>
              <input
                type="text"
                name="skill1"
                onChange={(e) => setSkill1(e.target.value)}
              />
            </div>
            <div>
              <div>
                <label>Skill 2:</label>
              </div>
              <input
                type="text"
                name="skill2"
                onChange={(e) => setSkill2(e.target.value)}
              />
            </div>
            <div>
              <div>
                <label>Skill 3:</label>
              </div>
              <input
                type="text"
                name="skill3"
                onChange={(e) => setSkill3(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPet;
