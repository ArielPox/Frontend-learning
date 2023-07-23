$(function() {
    // 1.全选 全不选的功能模块
    // 就会说将全选按钮的状态赋值给其他的小的按钮就可以了
    // 事件可以选择的是change()事件
    $('.checkall').change(function() {
        $(".checkall,.j-checkbox").prop("checked", $(this).prop("checked"));

        // 当全选框选中的时候 所有的商品就会就会添加上背景否则就不会添加
        if ($(this).prop("checked")) {
            // 加上背景类
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    })

    // 2.如果小的复选框的被选中我的个数等于3 就应该将全选框选上 否则就不选
    $(".j-checkbox").change(function() {
        // if (被选中的个数 === 3) {
        //     就要全部选中
        // } else {
        //     不要全部被选中
        // }
        // console.log($("j-checkbox:checked").lenth);
        // $(".j-checked").lenth就是这个复选框的个数
        if ($(".j-checkbox:checked").lenth === $("j-checkbox").lenth) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        // 假如当前的复选框选上的话就会让当前的复选框背景也变色
        if ($(this).prop("checked")) {
            // 让选中的复选框加上背景类
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 3.增减商品的数量的模板 首先就是声明一个变量 当点击加号的时候（increment）就让这个值++ 之后就是赋值给文本框
    $(".increment").click(function() {
        // 得到当前的兄弟的文本框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings('.itxt').val(n);

        // 计算小计的模块的时候根据文本框的值 当前的商品的价格 就是商品的小计 当前的商品的价格就是p
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 要将价钱前面的人民币符号去掉
        p = p.substr(1);

        // 保留两位小数
        var price = (p * n).toFixed(2);
        // 小计的模块 可以将小计的部分保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });

    // 当减少商品购买数量的时候
    $(".decrement").click(function() {
        // 得到当前的兄弟的文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);

        // 计算小计的模块的时候根据文本框的值 当前的商品的价格 就是商品的小计 当前的商品的价格就是p
        // parents("指定的父元素") 这个方法可以将指定的父元素找出来
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 要将价钱前面的人民币符号去掉
        p = p.substr(1);

        // 保留两位小数
        var price = (p * n).toFixed(2);
        // 小计的模块 可以将小计的部分保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });



    // 4.用户修改文本框的值 计算小计的模块
    $(".itxt").change(function() {
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 要将价钱前面的人民币符号去掉
        p = p.substr(1);

        // 保留两位小数
        var price = (p * n).toFixed(2);
        // 小计的模块 可以将小计的部分保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });

    // 6.计算总件数还有总额
    // 一开始的时候就要调用一次
    getSum();


    function getSum() {
        var count = 0; //数量
        var money = 0; //价钱

        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });

        // 总的价钱
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });

        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    // 7.删除模块
    // （1）商品后面的删除按钮
    $(".p-action a").click(function() {
        // 删除的是当前的商品
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2)删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小的复选框的选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3)清除购物车 删除全部的商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    });
})