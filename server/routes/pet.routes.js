const PetController = require('../controllers/pet.controller')

module.exports = app => {
        app.get('/api/Pets', PetController.index);
        app.post('/api/Pets', PetController.create);
        app.get('/api/Pets/:id', PetController.show);
        app.put('/api/Pets/:id', PetController.update);
        app.delete('/api/Pets/:id', PetController.destroy);
    }