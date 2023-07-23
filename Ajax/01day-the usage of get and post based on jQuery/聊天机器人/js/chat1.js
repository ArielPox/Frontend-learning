$(function() {
    /* 初始化滚动条这个方法定义到scoll的函数里面
     */
    resetui();

    // 为发送的按钮绑定点击事件
    $('#btnSend').on('click', function() {
        // 获取的是输入框里面的文字并且使用trim函数将多余的空格都去掉
        var text = $('#ipt').val().trim();
        if (text.length <= 0) {
            return $('#ipt').val('');
        }
        // 将入用户输入了内容就将内容加载带聊天框里面
        $('#talk_list').append('<li class="right_word"><img src = "img/person02.png"/> <span> ' + text + ' </span> </li >');
        // 聊天的记录加载到聊天框之后就将输入框置空
        $('#ipt').val('');
        // 将最新额聊天滚动到最下面 所以要使用resetui() 函数将窗口控制到最新的消息的页面
        resetui();
        getMsg(text);
    })


    // 获取机器人发送回来的消息
    function getMsg(text) {
        $.ajax({
            method: 'GET',
            url: 'https://ajax-base-api-t.itheima.net/api/robot',
            data: { spoken: text },
            success: function(res) {
                console.log(res);
                if (res.message === 'success') {
                    // 接受聊天消息
                    var msg = res.data.info.text;
                    $('#talk_list').append('<li class="right_word"><img src = "img/person01.png"/> <span> ' + msg + ' </span> </li >');
                    // 重置滚动条的位置
                    resetui();
                    // 代用getVoice函数将文本转化为语音
                    getVoice(msg);
                }
            }
        })
    }

    function getVoice(test) {
        $.ajax({
            method: 'GET',
            url: 'https://ajax-base-api-t.itheima.net/api/synthesize',
            data: {
                test: test
            },
            success: function(res) {
                if (res.status === 200) {
                    // 播放语音
                    $('#voice').attr('src', res.voiceUrl);
                }
            }
        })
    }


    // 为文本框绑定触发按钮点击事件
    $('#ipt').on('keyup', function(e) {
        // e.keyCOde可以获取当前的点击按钮的编码
        if (e.keyCode === 13) {
            // 调用按钮元素发生点击事件
            $('#btnSend').click();
        }
    })
})