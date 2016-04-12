'use strict';

const paths = require('../../config/paths');
const routes = require('../../config/routes');
const InvalidHttpMethodError = require('../errors/InvalidHttpMethodError');

const methods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE'
};

const controllers = {
  index: require(`../${paths.folders.app}/${paths.controllers}/IndexController`),
};

/**
 * Router Class
 */
class Router {
  /**
   * Generate routes for application
   * @param app
   */
  static build(app) {
    const cases = {};
    // Switch-like
    cases[methods.POST] = app.post;
    cases[methods.GET] = app.get;
    cases[methods.DELETE] = app.delete;

    routes.forEach(route => {
      const controller = Router.getController(route.controllerName);
      route.subRoutes.forEach(subRoute => {
        const action = Router.getAction(subRoute.actionName);
        const args = [route.pattern + subRoute.pattern];

        args.push(controllers[route.controllerName][action]);

        console.log(`[${subRoute.method}] ${args[0]} -> ${controller}/${action}`);

        if (cases[subRoute.method]) {
          cases[subRoute.method].apply(app, args);
        } else {
          throw new InvalidHttpMethodError(subRoute.method);
        }
      });
    });
  }

  static getController(name) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)}Controller`;
  }

  static getAction(name) {
    return `${name}Action`;
  }
}

module.exports = Router;
