class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            console.warn(`"${vertex}" vertex already present into adjacency list. Overriding ${vertex} `);
        }

        this.adjacencyList[vertex] = [];

        return this;
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            console.info(`Creating vertex "${vertex1}"`)
            this.addVertex(vertex1);
        }

        if(!this.adjacencyList[vertex2]) {
            console.info(`Creating vertex "${vertex2}"`)
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].push({ node: vertex2 });
        this.adjacencyList[vertex2].push({ node: vertex1 });

        return this;
    }

    // O(|E|)
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(val => val !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(val => val !== vertex1);
        
        return this;
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex]
            .forEach(vertex2 => this.removeEdge(vertex, vertex2));

        delete this.adjacencyList[vertex];
    }

    DFS(from = '') {
        // implement this
    }

    hasPath(from, to) {
        // implement this
    }
}

const graph = new Graph();

graph
.addVertex('A')
.addVertex('B')
.addVertex('C')
.addVertex('D')
.addVertex('F')

console.log(graph)

graph
.addEdge('A', 'B')
.addEdge('A', 'C')
.addEdge('B', 'C')
.addEdge('C', 'D')
.addEdge('D', 'A')
.addEdge('D', 'F');
console.log(graph.adjacencyList.A)


// g.removeVertex('C');

// console.log(g.DFS('A'));
// console.log(g.hasPath('A', 'C'));
// console.log(g.hasPath('A', 'F'));
