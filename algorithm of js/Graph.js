let Graph = function() {
    // c存储节点
    let vertices = [];
    // 存储边
    let adjList = {};
    // 添加顶点
    this.addV = function(v) {
            vertices.push(v);
            adjList[v] = [];
        }
        // 添加边
    this.addEdge = function(a, b) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    this.show = function() {
        let S = '\n';
        for (let i = 0; i < vertices.length; i++) {
            let v = vertices[i];
            S += v + "=>";
            let edge = adjList[v];
            for (let j = 0; j < adjList[v].length; j++) {
                S += edge[j];
            }
            S += '\n'
        }
        console.log(S);
    }
}

// test
let test = new Graph
test.addV("A");
test.addV("B");
test.addV("C");
test.addV("D");
test.addV("E");
test.addV("F");
test.addEdge("A", "B");
test.addEdge("C", "B");
test.addEdge("E", "B");
test.addEdge("C", "E");
test.addEdge("A", "D");