var Queue = function() {
    let items = [];

    // 入队操作
    this.enqueue = function(element) {
        items.push(element);
    }

    //出队操作
    this.dequeue = function(element) {
        return items.shift();
    }

    // /查看队列头
    this.front = function() {
        return items[0];
    }

    //检查队列是不是空
    this.IsEmpty = function() {
        return items.length == 0;
    }

    //检查队列的长度

    this.size = function() {
        return items.length - 1
    }
}

//优先队列
var PriorityQueue = function() {
    var items = [];
    // 辅助类
    var QueueItem = function(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueItem = new QueueItem(element, priority);

        // 插入成功的标志
        var added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueItem.priority > items[i].priority) {
                items.splice(i, 0, queueItem)
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueItem);
        }
    }
    this.getItems = function() {
        console.log(items);
    }
}

var test = new PriorityQueue()
test.enqueue('嘻嘻', 10);
test.enqueue("andy", 19);
test.getItems();