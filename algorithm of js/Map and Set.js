// 集合特点:
//无重复性  是一种键值对的存储
let Set = function() {
    let items = {}

    // has检查元素是不是存在
    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    // 向集合里面添加元素（集合元素是不重复的）
    this.add = function(value) {

        if (this.has(value)) {
            return false;
        } else {
            items[value] = value;
            return value;
        }
    }

    // 移除掉集合里面的一些元素
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        } else {
            return false;
        }
    }

    // 得到集合
    this.getItems = function() {
        return items;
    }

    // 清空集合
    this.clear = function() {
        return items = {};
    }

    // 集合的长度大小
    this.Size = function() {
        // let count = 0;
        // for (let i in items) {
        //     if (items.hasOwnProperty(i)) {
        //         count++;
        //     }
        // }
        // return count;
        // method2
        return Object.keys(items).length;
    }

    // 将所有的值提取出来 并且以属数组的方式返回
    this.values = function() {
            let values = [];
            for (let i in items) {
                if (items.hasOwnProperty(i)) {
                    values.push(i);
                }
            }
            return values;
        }
        // 并集
    this.union = function(otherSet) {
        let resultSet = new Set();

        // 将自己的提出来
        let arr = this.values()
        for (let i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }

        // 把另外的一个集合的值也加进来
        arr = otherSet.values();
        for (let i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }
        return resultSet.getItems();
    }

    // 交集
    this.intersection = function(otherSet) {
        let resultSet = new Set();
        // 将自己的元素提取出来
        let arr = this.values();
        for (let i = 0; i < arr.length; i++) {
            if (otherSet.has(arr[i])) {
                resultSet.add(arr[i]);
            }
        }

        return resultSet.getItems();
    }


    // 差集
    this.difference = function(otherSet) {
        let resultSet = new Set();
        // 将自己的元素提取出来
        let arr = this.values();
        for (let i = 0; i < arr.length; i++) {
            if (!otherSet.has(arr[i])) {
                resultSet.add(arr[i]);
            }
        }

        return resultSet.getItems();
    }
}

let A = new Set();
A.add(1);
A.add(2);
A.add(3);
A.add(4);
A.add(5);

let B = new Set();
B.add(3);
B.add(4);
B.add(5);
B.add(6);
B.add(7);