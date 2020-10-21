const Pet = require("./../models/pets.model");

module.exports = {
  getAll: (req, res) => {
    Pet.find()
      .then((pets) => res.json(pets))
      .catch((err) => res.json(err));
  },
  getOne: (req, res) => {
    Pet.findById(req.params.id)
      .then((pet) => res.json(pet))
      .catch((err) => res.json(err));
  },
  create: (req, res) => {
    console.log(req.body);
    Pet.create(req.body)
      .then((newPet) => res.json(newPet))
      .catch((err) => res.json(err));
  },
  update: (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedPet) => res.json(updatedPet))
      .catch((err) => res.json(err));
  },
  delete: (req, res) => {
    Pet.findByIdAndRemove(req.params.id)
      .then((success) => res.json(success))
      .catch((err) => res.json(err));
  },
};
