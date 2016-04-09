/**
 * Sequelize initialization module
 */

'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _environment = require('../config/environment');

var _environment2 = _interopRequireDefault(_environment);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {
  Sequelize: _sequelize2.default,
  sequelize: new _sequelize2.default(_environment2.default.sequelize.uri, _environment2.default.sequelize.options)
};

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');

module.exports = db;
//# sourceMappingURL=index.js.map
