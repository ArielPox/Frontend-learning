$(function() {
    // 获取新闻的列表
    function getNewsList() {

        // 定义一个过滤器 处理时间
        template.defaults.imports.dateFormat = function(date) {
            let y = date.getFullYear();
            let m = date.getMonth();
            let d = date.getDate();

            return y + '-' + m + '-' + d;

        }
        $.get('> http://www.liulongbin.top:3006/api/cmtlist', function(res) {
            if (res.status !== 200) {
                return alert('获取新闻列表失败');
            }
            console.log(res.data);
            // 将每一项的tag属性从字符串改造为字符串书互助
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',');
            }

            // 调用template函数
            let htmlStr = template('tpl-news', res);
            $('tpl-news').html(htmlStr);
        })
    }
    getNewsList();


})