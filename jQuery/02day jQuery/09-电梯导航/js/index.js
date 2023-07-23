// $(function() {
//     // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
//     // 节流阀  互斥锁 
//     var flag = true;
//     // 1.显示隐藏电梯导航
//     var toolTop = $(".recommend").offset().top;
//     toggleTool();

//     function toggleTool() {
//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn();
//         } else {
//             $(".fixedtool").fadeOut();
//         };
//     }

//     $(window).scroll(function() {
//         toggleTool();

//         // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


//         if (flag) {
//             $(".floor .w").each(function(i, ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {
//                     console.log(i);
//                     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

//                 }
//             })
//         }



//     });
//     // 2. 点击电梯导航页面可以滚动到相应内容区域
//     $(".fixedtool li").click(function() {
//         flag = false;
//         console.log($(this).index());
//         // 当我们每次点击小li 就需要计算出页面要去往的位置 
//         // 选出对应索引号的内容区的盒子 计算它的.offset().top
//         var current = $(".floor .w").eq($(this).index()).offset().top;
//         // 页面动画滚动效果
//         $("body, html").stop().animate({
//             scrollTop: current
//         }, function() {
//             flag = true;
//         });
//         // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
//         $(this).addClass("current").siblings().removeClass();
//     });
// });


$(function() {

    // 当我们点击了li之后就不需要执行滚动事件里面的li的背景的选择 这个时候就要使用到节流阀 互斥锁
    var flag = true;

    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    // 为了在刷新页面的时候 可以让导航存在 需要将导航显示与隐藏的效果封装在函数中 页面在刷新的时候也会将导航显示 或者是隐藏起来
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }


    $(window).scroll(function() {
        toggleTool();
        // 当页面滚动到某内容区域 旁边的电梯导航就会让相应的li添加到上类名 其余的就会删除current 类名
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    });


    // 2.电极电梯导航可以滚动到相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        // 当我们每次点击li就会需要计算出页面所需去往的位置
        // 选出来的对应索引号的盒子 计算出它的offset().top的值
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画的的滚动的效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击了之后 让当前的li添加的是current的类名称 姐妹元素就会移除这个背景类
        $(this).addClass("current").siblings().removeClass();
    });
});