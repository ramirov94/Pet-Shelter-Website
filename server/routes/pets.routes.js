const pets = require("./../controllers/pets.controllers");

module.exports = (app) => {
  app.get("/api/pets", pets.getAll);
  app.get("/api/pets/:id", pets.getOne);
  app.post("/api/pets", pets.create);
  app.put("/api/pets/:id", pets.update);
  app.delete("/api/pets/:id", pets.delete);
};
