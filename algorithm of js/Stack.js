var Stack = function() {
    let items = [];

    //push 栈顶添加元素
    this.push = function(element) {
            items.push(element);
        }
        //pop移出元素
    this.pop = function(element) {
        return items.pop();
    }

    // 检查栈的顶部的元素
    this.peek = function(element) {
        return items[items.length - 1];
    }

    this.IsEmpty = function() {
        return items.length == 0;
    }


    this.size = function() {
            return items.length;
        }
        //清除栈
    this.clear = function() {
        items = [];
    }
}