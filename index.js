const wilderInfo = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${wilderInfo.nameWilder} from ${wilderInfo.campusWilder} !`,
    e : "xX",
    T : " P"
}));

