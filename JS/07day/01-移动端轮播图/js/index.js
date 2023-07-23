window.addEventListener('load', function() {
    // 1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 2.获取的是focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2.利用定时器自动的轮播图片
    var index = 0;
    var timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            // 这里使用的是过渡的效果
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        },
        2000);

    // 当过渡完成之后 再去判断监听过渡完成的事件transitionend
    ul.addEventListener('transitionend', function() {
        // 无缝的滚动
        if (index >= 3) {
            index = 0;
            // 去掉过渡的效果 让ul可以快速的跳到理想的位置
            ul.style.transition = 'none';
            // 利用最新的索引号去乘以宽度然后去图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            // 去掉过渡的效果 让ul可以快速的跳到理想的位置
            ul.style.transition = 'none';
            // 利用最新的索引号去乘以宽度然后去果冻图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        // 3.小圆点跟随变化
        // 将ol里面的li带有current的出掉类名 之后再让当前的索引的li加上curret
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    // 4.手指触摸滑动轮播图
    // 触摸元素touchstart：获取的是手指头的初始的坐标
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指在触摸的时候就会停止定时器；
        clearInterval(timer);
    });
    // 移动手指touchmove:计算手指的移动的距离 并且要移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动的距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子
        var translatex = -index * w + moveX;
        // 手指头在拖动的时候 不需要动画的效果所以要取消过渡的效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
        // 阻止滚动屏幕的行为
        e.preventDefault();
    });

    // 手指离开的时候 根据移动的距离判断是回弹还是播放上一张 下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1)如果移动的距离大于50像素就会播上一张或者是下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑的时候 就是播放的是上一张 moveX是负值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑动的话 就是播放的是下一张
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // 如果滑动的移动的距离是小于50像素的 我们就可以回弹
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }


        // 手指离开之后就要重新的开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
                index++;
                var translatex = -index * w;
                // 这里使用的是过渡的效果
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            },
            2000);

    });

    // 返回顶部的模块制作
    var goBack = this.document.querySelector('.goBack');
    var nav = this.document.querySelector('nav');
    this.window.addEventListener('scroll', function() {
        if (window.pageYoffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })

























})