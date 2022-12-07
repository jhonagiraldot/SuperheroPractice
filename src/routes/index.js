const superhero_routes = require('./superhero.routes');

const app_routes= (app) => {
    app.use('/api/v1/heros', superhero_routes);
};

module.exports = app_routes;