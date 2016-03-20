'use strict';

import requireDir from 'require-dir';
import dotEnv from 'dotenv';

dotEnv.load({ silent: true });
requireDir('./gulp/tasks', { recurse: true });
