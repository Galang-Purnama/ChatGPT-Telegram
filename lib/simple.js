const spin = require('spinnies')
const cfonts = require('cfonts')
const chalk = require('chalk')
const fetch = require ('node-fetch')


exports.banner = cfonts.render(('CHATGPT'), {
font: 'chrome',
color: 'candy',
align: 'center',
gradient: ["red","green"],
lineHeight: 3
});
exports.success = (id, text) => {
spins.succeed(id, {text: text})
}
const spinner = { 
"interval": 120,
"frames": [
"∙∙∙∙∙∙∙∙",
"●∙∙∙∙∙∙∙",
"∙●∙∙∙∙∙∙",
"∙∙●∙∙∙∙∙",
"∙∙∙●∙∙∙∙",
"∙∙∙∙●∙∙∙",
"∙∙∙∙∙●∙∙",
"∙∙∙∙∙∙●∙",
"∙∙∙∙∙∙∙∙"
]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
 exports.Sukses = (id, text) => {
spins.add(id, {text: text})
}