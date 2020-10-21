import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const PetEdit = (props) => {
  const { pets, setPets, pet, setPet } = props;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errs, setErrs] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/pets/" + props.id)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill1(res.data.skill1);
        setSkill2(res.data.skill2);
        setSkill3(res.data.skill3);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const editPet = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3500/api/pets/" + props.id, {
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
          navigate("/pets/" + props.id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div style={{ textAlign: "center" }}>
            <h1>Pet Shelter</h1>{" "}
            <Link
              style={{
                marginBottom: "20px",
              }}
              to="/pets"
            >
              back to home
            </Link>
          </div>
          <h4 style={{ textAlign: "center" }}>Edit {pet.name}</h4>
        </div>
        <form onSubmit={editPet} className="card">
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
                  value={name}
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
                  value={type}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errs.description ? <p>{errs.description.message}</p> : null}
              </div>
              <button type="submit" className="btn btn-primary">
                Edit Pet
              </button>
            </div>
            <div
              style={{
                display: "inline-block",
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
                  value={skill1}
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
                  value={skill2}
                  onChange={(e) => setSkill2(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <div>
                  <label>Skill 3:</label>
                </div>
                <input
                  type="text"
                  name="skill3"
                  value={skill3}
                  onChange={(e) => setSkill3(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetEdit;
