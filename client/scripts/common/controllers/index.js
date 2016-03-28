'use strict';

module.exports = function(app) {
    // inject:start
    require('./actu')(app);
    require('./contact')(app);
    require('./home')(app);
    require('./menu')(app);
    require('./sponsor')(app);
    // inject:end
};