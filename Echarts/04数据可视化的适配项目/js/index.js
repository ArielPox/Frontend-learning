//为了防止变量名的冲突（变量污染）采取的是立即执行函数 每一个效果都用立即执行函数
window.addEventListener("load", function() {
    // 立即执行函数
    (function() {
        // 1.column-1监控模块中点击不同的模块就会显示不同的模块
        $(".monitor .tabs").on('click', 'a', function() {
            $(this).addClass("active").siblings("a").removeClass('active');

            // 选区的是a对应的索引号的content
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
        });

        // 2.column-1中的监控模块里面的数字滚动：首先就是克隆marquee里面的所有的行 之后再用CSS3的动画 让没每一行移动起来 移动到总数的行数的一半的时候 就会回到第一行继续移动
        $(".marquee-view .marquee").each(function() {
            var rows = $(this).children().clone();
            $(this).append(rows);
        });
    })();

    // 点位分布的统计模板
    (function() {
        // 1.实例化对象
        var myChart = echarts.init(document.querySelector('.pie'));
        // 2.指定配置项还有数据
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [{
                // 图表的名称
                name: 'Area Mode',
                // 图标的类型
                type: 'pie',

                //南格尔玫图是有两个图的 内远的半径是10%外圆的半径是70%
                // 饼形图的半径 可以是像素 也可以是百分比（给予BOM的容器）第一项就是内半径 第二项就是外半径 可以通过调节塔来改变饼形图的大小
                radius: ['10%', '70%'],
                // 图表中心的位置left50% top50%
                center: ['50%', '50%'],
                // radius是半径的模式 还有一种是area面积的模式
                roseType: 'area',
                // 数据集 表示的是数据的值还有名称
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 30, name: 'rose 1' },
                    { value: 28, name: 'rose 2' },
                    { value: 26, name: 'rose 3' },
                    { value: 24, name: 'rose 4' },
                    { value: 22, name: 'rose 5' },
                    { value: 20, name: 'rose 6' },
                    { value: 18, name: 'rose 7' },
                    { value: 16, name: 'rose 8' }
                ],
                // 用于设置图标中文字中相关的样式 label对象
                label: { fontSize: 10 },
                labelLine: {
                    length: 6,
                    length2: 8
                }
            }]
        };
        // 3.配置项还有数据给我们的实例化的对象
        myChart.setOption(option);
    })();



});