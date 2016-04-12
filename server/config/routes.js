'use strict';

const index = 'index';

module.exports = [
  {
    name: 'Root',
    pattern: '/',
    controllerName: index,
    subRoutes: [
      {
        name: 'Forward',
        method: 'GET',
        pattern: '/',
        actionName: index,
        checkSecurity: false,
      },
    ]
  }
];

