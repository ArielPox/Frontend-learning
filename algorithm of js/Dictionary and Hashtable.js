// 1.字典 通过键值对结构存储 使用key 访问值 Set是值值对的结构  js的数据类型对象就是字典的一种实现
// 字典的主要的额操作

let DIctionary = function() {
        let items = {};

        // 检查键是不是存在
        this.has = function(key) {
            return key in items;
        }

        // 添加数据
        this.set = function(key, value) {
            items[key] = value;
        }

        // 删除数据
        this.delete = function(key) {
            if (this.has(key)) {
                delete items[key];
                return true;
            }
            return false;
        }

        // 得到字典
        this.getItems = function() {
            return items;
        }

        // 得到数据
        this.get = function(key) {
            if (this.has(key)) {
                return items[key];
            }
            return undefined;
        }

        // 以数组的形式返回一个字典的值
        this.values = function() {
            let value = [];
            for (let i in items) {
                if (this.has(i)) {
                    value.push(items[i]);
                }
            }
            return value;
        }

        // 获取全部的键的名称
        this.getKeys = function() {
            return Object.keys(items);
        }
    }
    /*     // 测试
        // let test = new DIctionary();
        // test.set("name1", "张三");
        // test.set("name2", "张四");
        // test.set("name3", "张五");
        // test.set("name4", "张六");
        // test.set("name5", "张七");
        // test.set("name6", "张八"); */

// 散列表 查找数据的效率高 可以快速地的定位 哈希表
// 存在的问题：散列冲突 当传递的key的值到散列函数的时候
// 会出现散列值一样的现象 从而把数据全部的存储的一样的位置
// 使得数据被覆盖带掉 称之为散列冲突
// 解决的方式：
// 链式法：为哈希表某一项创建链接空间 使用链表
// 线性探测：存储位置出现重复的的时候就向后面的位置储存

// 引入链表
let LikeList = function() {
    // 链表的头
    let head = null;
    //链表的长度
    let Length = 0;

    // 辅助类 一个节点
    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    //链表尾部添加元素
    this.append = function(element) {
        let node = new Node(element)
        if (head == null) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    // 实现得到链表的额头的部分
    this.getHead = function() {
        return head;
    }


    //在链表的某一个位置插入元素
    this.Insert = function(position, element) {
        // 越界检查
        if (position > -1 && position < length) {
            let node = new Node(element);
            if (position == 0) {
                let current = head;
                head = node;
                node.next = current;
            } else {
                let index = 0;
                let current = head;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
        }
    }

    // 移出某个位置的元素
    this.RemoveAt = function(position) {
            if (position == 0) {
                let current = head;
                head = null;
            } else {
                let index = 0;
                let current = head;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                length--;
                return current;
            }
        }
        // 找到特定的元素的位置
    this.indexOf = function(element) {
        let current = head;
        let index = 0;
        while (current) {
            if (current.element == element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // 删除某一个元素
    this.remove = function(element) {
        return this.RemoveAt(this.indexOf(element));
    }

    // 检查链表是不是为空
    this.Isempty = function() {
        return this.length == 0;
    }
}

/* let test = new LikeList;
test.append(1);
test.append(12);
test.append(13);
test.append(14);
test.append(10);
test.append(15); */



// 普通的散列表
let HashTable = function() {
    let items = {};

    //散列函数 得到散列的值
    let loseHashcode = function(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash += value[i].charCodeAt();
        }

        return hash % 37;
    }

    // 添加数据
    this.put = function(key, value) {
        let position = loseHashcode(key);
        items[position] = value;
    }

    // 移出数据
    this.remove = function(key) {
        let position = loseHashcode(key);
        items[position] = undefined;
    }

    // 得到值
    this.getvalue = function(key) {
        return items[loseHashcode(key)];
    }
    this.get = function() {
        return items;
    }

}

// 解决办法1：链式存储法 存在的缺陷：存储的时候要将key的值也要存储一遍 以便于在链表中查找
let HashTable_1 = function() {
    let items = {};

    let Node = function(key, value) {
        this.key = key;
        this.value = value;
    }

    //散列函数 得到散列的值
    let loseHashcode = function(value) {
            let hash = 0;
            for (let i = 0; i < value.length; i++) {
                hash += value[i].charCodeAt();
            }

            return hash % 37;
        }
        // 添加数据
    this.put = function(key, value) {
        let position = loseHashcode(key);
        // 如果散列的地址已经有了 就直接链接在当散列的地址
        //  如果没有就直接创造一个链表空间 将值放进去
        if (items[position]) {
            items[position].append(new Node(key, value));
        } else {
            let t = new LikeList();
            items[position] = t;
            items[position].append(new Node(key, value));
        }
        console.log(key + "——" + value);
    }

    // 获取元素
    this.get = function(key) {
        let position = loseHashcode(key);
        if (items[position]) {
            // 散列地址存在数据就进行查找
            let cur = items[position].getHead();
            while (cur) {
                if (cur.element.key == key) {
                    return cur.element.value;
                }
                cur = cur.next;
            }
        } else {
            return undefined;
        }
    }

    // 删除的办法
    this.remove = function(key) {
        let position = loseHashcode(key);
        if (items[position]) {
            // 散列地址存在数据就进行查找
            let cur = items[position].getHead();
            while (cur) {
                if (cur.element.key == key) {
                    //   查找到对应的key
                    items[position].remove(cur.element);
                    if (items[position].Isempty()) {
                        items[position] = undefined;
                    }
                }
                cur = cur.next;
            }
        } else {
            return false
        }
    }

}


// 解决办法2 线性探测法
let HashTable_2 = function() {
    let HashTable_1 = function() {
        let items = {};

        let Node = function(key, value) {
            this.key = key;
            this.value = value;
        }

        //散列函数 得到散列的值
        let loseHashcode = function(value) {
            let hash = 0;
            for (let i = 0; i < value.length; i++) {
                hash += value[i].charCodeAt();
            }

            return hash % 37;
        }

        // 实现存储数据的方法
        this.put = function(key, value) {
            let position = loseHashcode(key);
            if (items[position] == undefined) {
                // 假如这个位置上没有数据的话就直接存放就可以
                items[position] = new Node(key, value);
            } else {
                // 假如这个位置有数据后面移动
                let index = position++;
                while (items[index] !== undefined) {
                    index++; //假如后面还是有数据的话就一直移动  直到遇见没有数据的空的位置
                }
                items[index] = new Node(key, value);
            }
        }
    }
}
let test = new HashTable_2()
test.put("Ana", "American");
test.put("Dnoie", "English");