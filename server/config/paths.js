'use strict';

const basePath = '..';

const controllers = 'controllers';
const app = 'app';
const errors = 'errors';
const middleware = 'middleware';

module.exports = {
  root: `${basePath}`,
  folders: {
    app,
    controllers,
    errors,
    middleware,
  },
  controllers: `${basePath}/${controllers}`,
};
