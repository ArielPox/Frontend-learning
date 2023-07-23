function animate(obj, target,callback) {
    // 当不停的点击按钮的时候就会有很多个定时器 元素的速度就会变快
    // 为了解决这个问题 要先清除上一个定时器 只保留当前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        // 步长值要写在定时器里面 并且要取整数值才可以
        var step = (target - obj.offsetLeft) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            // 停止动画 就是停止定时器
            clearInterval(obj.timer);
            // 回调函数要写在停止的定时器里面
            if(callback)
            {
                callback();
            }
        }

        // 把每次加5这个步长值改为有个慢慢变小的值 步长公式：(目标值-现在的位置)/10

        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}
