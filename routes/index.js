const users = require('./users/index.js');

module.exports = (app) => {
    app.use('/users', users());
};