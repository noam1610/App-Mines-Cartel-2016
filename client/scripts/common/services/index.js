'use strict';

module.exports = function(app) {
    // inject:start
    require('./data')(app);
    // inject:end
};