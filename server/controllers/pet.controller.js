const Pets = require ('../models/pet.model');

module.exports = {
    index: (req, res) => {
        Pets.find()
        .then(data=> res.json({ results: data }))
        .catch(err => res.status (404).json({ errors: err.errors }));

    },
    create: (req, res) => {
        Pets.create(req.body)
        .then(data => res.json({ results: data }))
        .catch(err => res.status (404).json({ errors: err.errors }));
    },
    show: (req, res) => {
        Pets.findOne({ _id: req.params.id })
        .then(data => res.json({ results: data }))
        .catch(err => res.status (404).json({ errors: err.errors }));
    },
    update: (req, res) => {
        Pets.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
                .then(data => res.json({ results: data }))
                    .catch(err => res.status (404).json({ errors: err.errors }));
    },
    destroy: (req, res) => {
        Pets.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.status (404).json({ errors: err.errors }));
    }
}