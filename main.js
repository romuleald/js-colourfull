const _chalk = require('chalk');
const chalk = new _chalk.Instance({level: 3});

const lessHex = '#1d365c';
const less = `${chalk.bgHex(lessHex)(chalk.bold.whiteBright(' {less} '))}`;
const lessPattern = (text) => `${chalk.bgHex(lessHex)(chalk.bold.whiteBright(` {${text}} `))}`;

const sassHex = '#cf649a';
const sass = `${chalk.bgHex(sassHex)(chalk.bold.whiteBright(' Sass '))}`;
const sassPattern = (text) => `${chalk.bgHex(sassHex)(chalk.bold.whiteBright(` ${text} `))}`;

const jsHex = '#f7e017';
const js = `${chalk.bgHex(jsHex)(chalk.bold.black(' JS'))}`;
const jsPattern = (text) => `${chalk.bgHex(jsHex)(chalk.bold.black(` ${text}`))}`;

const typeScriptHex = '#294E80';
const typeScript = `${chalk.bgHex(typeScriptHex)(chalk.bold.whiteBright(' Type'))}${chalk.bgHex(typeScriptHex)(chalk.whiteBright('Script '))}`;
const typeScriptPattern = (text, text2) => `${chalk.bgHex(typeScriptHex)(chalk.bold.whiteBright(` ${text}`))}${chalk.bgHex(typeScriptHex)(chalk.whiteBright(`${text2} `))}`;

const webpackBgHex = '#eaf8ff';
const webpackFontHex = '#4e7182';
const webpack = `${chalk.bgHex(webpackBgHex)(chalk.bold.hex(webpackFontHex)(' webpack '))}`;
const webpackPattern = (text) => `${chalk.bgHex(webpackBgHex)(chalk.bold.hex(webpackFontHex)(` ${text} `))}`;

const npmBgHex = '#cd3534';
const npmFontHex = '#ffffff';
const npm = `${chalk.bgHex(npmBgHex)(chalk.bold.hex(npmFontHex)(' npm '))}`;
const npmPattern = (text) => `${chalk.bgHex(npmBgHex)(chalk.bold.hex(npmFontHex)(` ${text} `))}`;

const nodeBgHex = '#43853d';
const nodeFontHex = '#ffffff';
const node = `${chalk.bgHex(nodeBgHex)(chalk.bold.hex(nodeFontHex)(' nodejs '))}`;
const nodePattern = (text) => `${chalk.bgHex(nodeBgHex)(chalk.bold.hex(nodeFontHex)(` ${text} `))}`;

const babelBgHex = '#f9dc3e';
const babelFontHex = '#24292e';
const babel = `${chalk.bgHex(babelBgHex)(chalk.bold.hex(babelFontHex)(' BABEL '))}`;
const babelPattern = (text) => `${chalk.bgHex(babelBgHex)(chalk.bold.hex(babelFontHex)(` ${text} `))}`;

module.exports = {
    less, lessPattern,
    js, jsPattern,
    typeScript, typeScriptPattern,
    babel, babelPattern,
    sass, sassPattern,
    webpack, webpackPattern,
    npm, npmPattern,
    node, nodePattern
};
