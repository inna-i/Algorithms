const PriorityQueue = require('./SimplePriorityQueue');

/**
 *  A weighted graph is a graph in which each branch is given a numerical weight. 
 *  A weighted graph is therefore a special type of labeled graph in which the labels are numbers (which are usually taken to be positive).
 * 
*/    
class WeightedGraph {

    /**
     *  In graph theory and computer science, an adjacency list is a collection of unordered lists used to represent a finite graph
     */
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * "Vertex" is a synonym for a node of a graph, i.e., one of the points on which the graph is defined and which may be connected by graph edges. 
     *  
     * Time complexity: O(1)
     */
    addVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            console.warn(`"${vertex}" vertex already present into adjacency list. Overriding ${vertex} `);
        }

        this.adjacencyList[vertex] = [];
    }

    /**
     * For an undirected graph, an unordered pair of nodes that specify a line joining these two nodes are said to form an edge.
     * 
     * Time complexity: O(1)
     */
    addEdge(vertex1, vertex2, weight) {
        if(!this.adjacencyList[vertex1]) {
            console.info(`Creating vertex "${vertex1}"`)
            this.addVertex(vertex1);
        }

        if(!this.adjacencyList[vertex2]) {
            console.info(`Creating vertex "${vertex2}"`)
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    // O(|E|)
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(val => val !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(val => val !== vertex1);
    }

    // O(|V| + |E|)
    removeVertex(vertex) {
        this.adjacencyList[vertex]
            .forEach(vertex2 => this.removeEdge(vertex, vertex2));

        delete this.adjacencyList[vertex];
    }

    /**
     * Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. 
     * It starts at the tree root and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
     */
    breadthFirstSearch() {
        const res = [];
        const keys = Object.keys(this.adjacencyList);
        const queue = [keys[0]];
        const visited = { [keys[0]]: true };

        while(queue.length) {
            const node = queue.shift();
            res.push(node);
            this.adjacencyList[node].forEach(vrt => {
                if(!visited[vrt.node]) {
                    visited[vrt.node] = true;
                    queue.push(vrt.node);
                } 
            });
        }

        return res;
    }

    /**
     * Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
     * The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph)
     * and explores as far as possible along each branch before backtracking.
     */
    depthFirstSearch() {
        const res = [];
        const keys = Object.keys(this.adjacencyList);
        const visited = {};

        const traverse = node => {
            if (!visited[node]) {
                visited[node] = true;
                res.push(node);
                this.adjacencyList[node].forEach(vrt => traverse(vrt.node))
            } 
        }

        traverse(keys[0]);

        return res;
    }

    /**
     * 
     * Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm)[1] is an algorithm for finding the shortest paths
     * between nodes in a graph, which may represent, for example, road networks. 
     * 
     * It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
     */
    dijkstra(vertex1, vertex2) {
        const previous = {};
        const dist = {};
        const keys = Object.keys(this.adjacencyList);
        const priorityQueue = new PriorityQueue();
        let smallest;

        // init
        keys.forEach(key => {
            if (key === vertex1) {
                dist[key] = 0;
                priorityQueue.enqueue(key, 0);
            } else {
                dist[key] = Infinity;
                priorityQueue.enqueue(key, Infinity);
            } 
            previous[key] = null;
        });

        // take smallest dist vertex
        while(priorityQueue.values.length) {
            smallest = priorityQueue.dequeue().val;

            if(smallest === vertex2) {
                // wohoo
                const res = [];
                let curr = previous[vertex2]
                while(curr) {
                    res.push(curr);
                    curr = previous[curr];
                }

                return res.reverse().concat(vertex2);
            } 

            this.adjacencyList[smallest].forEach(el => {
                // calc dist to neighbour node
                let candidate = el.weight + dist[smallest];
                if (dist[el.node] > candidate) {
                    dist[el.node] = candidate;
                    previous[el.node] = smallest;
                    priorityQueue.enqueue(el.node, candidate)
                }
            })
        }


    }

}

/**
*  Example:
*         
*         7
*      C --- D
*   1 /   3   \ 2
*    A ------- B
*  3 |    2    | 5
*    F ------- K
*  4 \    1   / 1
*     J ---- I
* 
*/   

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('F');
graph.addVertex('K');
graph.addVertex('J');
graph.addVertex('I');

graph.addEdge('C', 'D', 7);
graph.addEdge('A', 'B', 3);
graph.addEdge('F', 'K', 2);
graph.addEdge('J', 'I', 1);

graph.addEdge('C', 'A', 1);
graph.addEdge('A', 'F', 3);
graph.addEdge('F', 'J', 4);
graph.addEdge('D', 'B', 2);
graph.addEdge('B', 'K', 5);
graph.addEdge('K', 'I', 1);

console.log(graph.breadthFirstSearch());
console.log(graph.depthFirstSearch());
console.log('A->D', graph.dijkstra('A', 'D'));
console.log('A->K', graph.dijkstra('A', 'K'));
console.log('A->I', graph.dijkstra('A', 'I'));
