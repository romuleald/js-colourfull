const _chalk = require('chalk');
const chalk = new _chalk.Instance({level: 2});

const less = `${chalk.bgHex('#1d365c')(chalk.bold.whiteBright(' {less} '))}`;
const lessPattern = (text) => `${chalk.bgHex('#1d365c')(chalk.bold.whiteBright(` {${text}} `))}`;

const js = `${chalk.bgHex('#f7e017')(chalk.bold.black(' JS'))}`;
const jsPattern = (text) => `${chalk.bgHex('#f7e017')(chalk.bold.black(` ${text}`))}`;

const typeScript = `${chalk.bgHex('#294E80')(chalk.bold.whiteBright(' Type'))}${chalk.bgHex('#294E80')(chalk.whiteBright('Script '))}`;
const typeScriptPattern = (text, text2) => `${chalk.bgHex('#294E80')(chalk.bold.whiteBright(` ${text}`))}${chalk.bgHex('#294E80')(chalk.whiteBright(`${text2} `))}`;

const babel = `${chalk.bgYellowBright(chalk.bold.black(' BABEL '))}`;
const babelPattern = (text) => `${chalk.bgYellowBright(chalk.bold.black(` ${text} `))}`;

module.exports = {
    less, lessPattern, js, jsPattern, typeScript, typeScriptPattern, babel, babelPattern
};
