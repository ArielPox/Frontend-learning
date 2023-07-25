const fs = require('fs');
const path = require('path');

// 1.  ../会将前面的一个路径抵消掉
const pathStr = path.join('/a', '/b/c', '../', '/d', '/e');
console.log(pathStr);

const pathStr1 = path.join('/a', '/b/c', '../../', '/d', '/e');
console.log(pathStr1);

fs.readFile(path.join(__dirname, './files/test.txt'), 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})