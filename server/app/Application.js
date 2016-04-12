'use strict';

const AbstractApplication = require('./AbstractApplication');

/**
 * Application
 */
class Application extends AbstractApplication {
  /**
   *
   * @private
   */
  _checkSettings() {
    super._checkSettings();

    console.log(process.env.NODE_ENV);
    if (!~['production', 'development'].indexOf(process.env.NODE_ENV)) {
      throw new Error(`Wrong NODE_ENV ${process.env.NODE_ENV} set for the application`);
    }
  }
}

module.exports = Application;
