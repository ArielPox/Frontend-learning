let Tree = function() {
    let Node = function(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    //创建一个根节点初始化为空
    var Root = null;
    // 插入节点使用递归
    let Insert = function(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right == null) {
                node.right = newNode;
            } else {
                Insert(node.right, newNode);
            }
        } else {
            if (node.left == null) {
                node.left = newNode;
            } else {
                Insert(node.left, newNode);
            }
        }

    }

    this.insert = function(value) {
        let newNode = new Node;
        newNode.value = value;
        if (Root == null) {
            Root = newNode;
        } else {
            Insert(Root, newNode);
        }
    }

    // 返回根节点
    this.getRoot = function() {
        return Root;
    }

    // 遍历节点
    let traverse = function(node) {
        if (node == null) {
            return
        }
        console.log(node.value);
        traverse(node.left);
        traverse(node.right);

    }
    this.traverse = function() {
        traverse(Root);
    }

    // 删除节点
    // 1.找到最小的一个节点
    var minNode = function(node) {
        if (node == null) {
            return null;
        }
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }

    // 2.移除节点 使用了递归的方式重构二叉树
    let removeNode = function(node, value) {
        if (node == null) {
            return null;
        } else if (value > node.value) {
            node.right = removeNode(node.right, value);
            return node;
        } else if (value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
        } else {
            // 找到了待删除的节点
            // 1删除的节点是子节点
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // 2.删除的节点有一个子节点
            if (node.left == null && node.right) {
                return node.right;
            } else if (node.left && node.right == null) {
                return node.left;
            }
            // 3.删除的节点拥有两个节点
            let tem = minNode(node.right);
            node.value = tem.value;
            node.right = removeNode(node.right, tem); //将右侧的最小的一个节点代替删除的节点的时候 还要将最小节点在自己的额位置删除
            return node;
        }
    }
    this.remove = function(value) {
        Root = removeNode(Root, value);
    }
}

// 测试
let test = new Tree();
test.insert(1);
test.insert(2);
test.insert(3);
test.insert(4);
test.insert(5);