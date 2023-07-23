$(function() {
    // 1.刷新页面不会丢失数据 因此需要用到本地存储localStorage
    // 核心的思路就是 不管是否按下了回车键 还是点击了复选框的按键 要将本地的数据记载在页面中 这样就可以保证数据不会丢失
    // 存储的数据用的是数组的格式储存起来

    // 2.按下回车键之后就会将新增加的数据添加到本地的存储里面
    // 2.1利用事件对象keyCode判断用户是不是按下了回车键 
    // 2.2声明一个数组 保存数据
    // 2.3先要将本地存储的数据全部放到这个数组里面 
    // 2.4 将罪行的表单数据获取来之后 追加到数组里面 
    // 2.5最后就是将数组存储的数据给到本地的存储里面 声明函数是savaDate()


    // 每次打开页面都会渲染一下
    load();
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入需要的内容")
            } else {
                // 先读取原来的数据
                var local = getDate();
                // console.log(local);
                // 将local数组进行数据的更新 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                //把这个数组local存储给本地的储存
                saveDate(local);
                load();
                $(this).val() = " ";
            }
        }
    });
    //2 读取本地的数据
    function getDate() {
        var date = localStorage.getItem("todolist");
        if (date != null) {
            // 本地存储的是字符串的格式 需要转化为对象的格式
            console.log(date);
            return JSON.parse(date);
        } else {
            // 假本地的数组对象是空的话 那么就会返回的是一个空的数组
            return [];
        }
    }

    //3 把新的表单数储存到本地的存储之中 注意储存的还是字符串的形式 使用的时候才是数组对象的形式
    function saveDate(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }

    //4 渲染加载数据
    // 7.统计完成还有没有完成的个数 声明两个变量 分别将待办个数 还有已办的个数储存起来 
    function load() {
        // 读取的是本地储存的数据
        var data = getDate();
        // 遍历这个数据 将每一个数据的内容添加在li上面之后 在一个个的添加ol里面 遍历之前要将ol清空一次 之后再将新的数据添加进去
        $("ol,ul").empty();
        var todoCount = 0; //正在完成的个数
        var todoDone = 0; //完成的个数
        // 遍历这个数据
        $.each(data, function(i, n) {
            // 其中要给每一个a添加上一个索引号 
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked=checked><p>" +
                    n.title + "</p><a href='javascript:;' id=" +
                    i + " >D</a></li > ");
                todoDone++;
            } else {
                $("ol").prepend("<li><input type='checkbox'><p>" +
                    n.title + "</p><a href='javascript:;' id=" +
                    i + " >D</a></li > ");
                todoCount++;
            }
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(todoDone);
    }

    // 5.点击后面a就会删除相应的数据 并且数据是从数组里面删除 不是从 li里面 删除之后再将页面渲染一下就可以了
    $("ol,ul").on("click", "a", function() {
        // 首先是获得本的存储
        var date = getDate();
        // 修改数据 首先是获得点击的对象的索引号  自定义的属性可以用atrr()来获取
        var index = $(this).attr("id");
        // 之后就是将点击的数据对应数组里面的数据给删除掉splice(从哪一个位置开始删除，删除几个元素)
        date.splice(index, 1);
        // 保存到本地的数据
        saveDate(date);
        // 重新渲染页面
        load();
    });
    // 6.正在完成的还有未完任务的渲染的问题
    $("ol,ul").on("click", "input", function() {
        // 先获取本地储存的数据
        var date = getDate();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        date[index].done = $(this).prop("checked"); //自定义的属性可以使用prop获得
        // 保存到本地数据
        saveDate(date);
        // 重新渲染页面
        load();
    });


});