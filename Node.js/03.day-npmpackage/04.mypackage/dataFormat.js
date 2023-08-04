// 定义格式化时间函数
function dataFormate(date) {
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();

    return y + '-' + m + '-' + d;
}

module.exports = {
    dataFormate
}