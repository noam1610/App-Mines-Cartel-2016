'use strict';

module.exports = function(app) {
    // inject:start
    require('./accueil')(app);
    require('./actu')(app);
    require('./actuDetail')(app);
    require('./calendar')(app);
    require('./classement')(app);
    require('./contact')(app);
    require('./home')(app);
    require('./menu')(app);
    require('./resDelegationDetail')(app);
    require('./rescontinu')(app);
    require('./resdelegation')(app);
    require('./sponsor')(app);
    require('./sport')(app);
    // inject:end
};