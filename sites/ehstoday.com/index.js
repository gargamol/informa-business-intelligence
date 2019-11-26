const newrelic = require('newrelic');
const startServer = require('@endeavor-business-media/lazarus-shared/start-server');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  gamConfig: { accountId: '3834', basePath: 'ehs.home' },
  routes,
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
