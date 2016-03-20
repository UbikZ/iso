'use static';

import gutil from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

/**
 * Class Bundle Logger
 * - use gutil to display pretty logs
 * - use prettyHrtime to time task duration
 */
class BundleLogger {
  constructor() {
    this.startTime = undefined;
  }

  start(filePath) {
    this.startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filePath) + '...');
  }

  watch(bundleName) {
    gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
  }

  end(filePath) {
    const taskTime = process.hrtime(this.startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filePath), 'in', gutil.colors.magenta(prettyTime));
  }
}

export default new BundleLogger();
