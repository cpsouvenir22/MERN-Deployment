
const express = require ("express"),
    app= express (),
    cors= require ('cors'),
    port = 8000,

    
    server = app.listen (port, ()=> console.log("Listen on port " + `${port}`))
    const { urlencoded } = require("express");
    
    app.use(cors(), express.json(), express.urlencoded({ extended: true}));

    require ('./server/config/database.config');
    require('./server/routes/pet.routes')(app);
        // enables cors
    
    
    