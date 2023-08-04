const mypackage = require('./04.mypackage/index');
const test = mypackage.dataFormate(new Date());
const htmlStr = "<h1><span>this is htmlStr</span></h1>";
console.log(mypackage.htmlEscape(htmlStr));
console.log(test);