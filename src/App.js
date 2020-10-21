import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import PetList from "./components/PetList";
import PetDetail from "./components/PetDetail";
import NewPet from "./components/NewPet";
import PetEdit from "./components/PetEdit";

function App() {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState({});

  const removeFromDom = (petId) => {
    setPets(pets.filter((pet) => pet._id != petId));
  };

  return (
    <div className="App">
      <Router>
        <PetList
          path="/pets"
          pets={pets}
          setPets={setPets}
          pet={pet}
          setPet={setPet}
        />
        <PetDetail
          path="/pets/:id"
          removeFromDom={removeFromDom}
          pets={pets}
          setPets={setPets}
        />
        <NewPet path="/pets/create" />
        <PetEdit path="/pets/:id/edit" pet={pet} setPet={setPet} />
      </Router>
    </div>
  );
}

export default App;
