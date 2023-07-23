window.addEventListener('load', function() {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');

    // 2.鼠标经过的时候就会显示左右的按钮 鼠标只要离开就会隐藏按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 鼠标经过的时候就会停止自动播放
        clearInterval(timer);
        timer = null;
    })

    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 鼠标离开的时候又开始自动播放 
        timer = setInterval(function() {
            //    手动的调用点击的事件
            arrow_r.click();
        }, 2000);
    })

    // 3.小圆圈的个数要与图片的数量是一样的 这个时候就要动态生成 图片是放在li里面的 所以就要计算li的个数 利用循环生成动态的小圆圈 创建节点 插入节点
    // 3.1获取focus里面的ul的li的个数
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');

    // 获取轮播图ul框的宽度
    var focusWidth = focus.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小圆圈的li
        var li = this.document.createElement('li');

        // 记录当前的小圆圈的索引号 通过自定义的属性来完成
        li.setAttribute('index', i);

        // 将小li插入ol之中
        ol.appendChild(li);

        // 3.3点击当前的小圆圈就取消别的小圆圈的current的类 只有自己添加上current的类
        li.addEventListener('click', function() {

            //3.4 点击小圆圈就会移动图片 引入动画的函数animate ul移动的距离应该是小圆圈的索引号乘以图片的宽度 注意移动的值是负值
            // 3.5当我们点击某一个小li的时候就要拉到当前的小li的索引号 

            var index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(focusWidth);
            console.log(index);

            // 还要将当前的小li加上current 的类

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下自己
            ol.children[circle].className = 'current';

            animate(ul, -index * focusWidth);

        })


    }
    //3.2 将ol里面的li设置类名为current
    ol.children[0].className = 'current';

    // 4.克隆第一张图片 将其放在ul最后 这不会导致小圆圈会多一个 因为这个代码是写在动态生产圆圈的下面的
    var firs = ul.children[0].cloneNode(true);
    ul.appendChild(firs);

    // 5.点击一次按钮就会滚动一张图片 声明一个变量num点击一次就会自增加1 
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            // 这个函数是有一定的时间的 所以这里可以用这样的条件来配合节流阀
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 右键控制图片的时候 下面的小圆圈也要发生变化
            // 排除其他
            // 如果是最后的一张就会让第一个小圆圈加上current的类
            circle++;
            if (circle == ul.children.length - 1) {
                circle = 0;
            }
            // alert(ul.children.length);

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下自己
            ol.children[circle].className = 'current';

        }
    });

    //6. 左侧按钮的做法
    // 6.1节流阀 就是为了防止在按按钮过快的时候图片过快的移动 这里使用这样的方法控制图片只有在走完一张图片的时候才会移动到下一张图片 不管按钮那么的频繁

    arrow_l.addEventListener('click', function() {
        if (flag) {
            if (num == 0) {
                ul.style.left = 0;
                num = ul.children.length - 1;
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 7点击右侧的按钮的时候 小圆圈就可以跟着一起变化 
            circle--;
            // 当circle小于0的时候 就说明了是第一张图片，那么小圆圈就是要改为最后一个

            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            // alert(ul.children.length);

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下自己
            ol.children[circle].className = 'current';

        }
    });

    // 8.自动播放轮播图
    var timer = this.setInterval(function() {
        //    手动的调用点击的时间
        arrow_r.click();
    }, 2000);


})