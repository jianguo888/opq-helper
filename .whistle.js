const pkg = require('./package.json');

exports.name = `[${pkg.name}]本地环境配置`;
exports.rules = `
docs.opqbot.com http://127.0.0.1:3000
`;
