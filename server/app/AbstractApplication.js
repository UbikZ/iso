'use strict';

const express = require('express');

const Router = require('./middleware/Router');
const httpConf = require('./../config/http');

/**
 * AbstractApplication
 */
class AbstractApplication {
  constructor() {
    this.config = undefined;
    this.app = undefined;

    // Call methods
    this._checkSettings();
    this._registerExternals();
    this._registerConfiguration();
    this._registerHttpMiddleware();
    this._registerDatabase();
    this._registerModels();
    this._registerControllers();
  }

  /**
   * Run the application
   */
  run() {
    this.app.listen(this.config.port, () => {
      console.log(`NodeJS server started on port ${this.config.port}`);
    });
  }

  /**
   * @private
   */
  _checkSettings() {
    if (process.env.NODE_ENV === undefined) {
      throw new Error('NODE_ENV have to be set.');
    }
  }

  /**
   * @private
   */
  _registerExternals() {
    this.app = express();
  }

  /**
   * @private
   */
  _registerConfiguration() {
    if (httpConf !== undefined && httpConf[process.env.NODE_ENV] !== undefined) {
      this.config = httpConf[process.env.NODE_ENV];
    }
  }

  /**
   * @private
   */
  _registerHttpMiddleware() {
    /* TODO */
  }

  /**
   * @private
   */
  _registerDatabase() {
    /* TODO */
  }

  /**
   * @private
   */
  _registerModels() {
    /* TODO */
  }

  /**
   * @private
   */
  _registerControllers() {
    Router.build(this.app);
  }
}

module.exports = AbstractApplication;
