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