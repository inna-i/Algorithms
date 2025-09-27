class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Add new Node
   * @param {number} value
   * @return this // to allow method chaining
   */
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value < value) {
        if (!temp.right) {
          temp.right = new Node(value);
          return this;
        }

        temp = temp.right;
      } else {
        if (!temp.left) {
          temp.left = new Node(value);

          return this;
        }

        temp = temp.left;
      }
    }
  }

  /**
   * Find Node by value
   * @param {number} value
   * @return Node || null
   */
  find(value) {
    let temp = this.root;

    if (!temp) {
      return null;
    }

    while (true) {
      if (temp.value === value) {
        return temp;
      } else if (temp.value < value) {
        if (!temp.right) {
          return null;
        }
        temp = temp.right;
      } else {
        if (!temp.left) {
          return null;
        }
        temp = temp.left;
      }
    }
  }

  /**
   * Check if Node exists
   * @param {number} value
   * @return {boolean}
   */
  contains(value) {
    const node = this.find(value);
    return node !== null;
  }

  // Traversing
  //    B
  // A     C

  // A, B, C
  traverseInOrder(node = this.root) {
    let res = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      res.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(node);

    return res;
  }

  // B, A, C
  //     2
  //  5      6
  //            100

  traversePreorder(node = this.root) {
    return node
      ? [
          node.value,
          ...this.traversePreorder(node.left),
          ...this.traversePreorder(node.right),
        ]
      : [];
  }

  // A, C, B
  //     50
  //  2      100
  //            6
  // 		5
  traversePostorder() {
    let res = [];

    function traverse(node) {
      if (node.left) {
        console.log(`---- L - value: ${node.value}`);
        traverse(node.left);
      }

      if (node.right) {
        console.log(`---- R - value: ${node.value}`);
        traverse(node.right);
      }

      res.push(node.value);

      console.log('traversePostorder  ', res);
    }

    traverse(this.root);

    return res;
  }

  print() {
    function printOut(node, prefix = 'Root: ', level = 0) {
      if (!node) return;

      console.log(`----  ${prefix}- level: ${level}, value: ${node.value}`);
      printOut(node.left, 'L--- ', level + 1);
      printOut(node.right, 'R-- ', level + 1);
    }

    printOut(this.root);
  }
}

const tree = new BinarySearchTree();
tree.add(101).add(6).add(130).add(50).add(5);
//		   101
//      6     130
//    5   50
// traverseInOrder
//		   101
//      6      130
//    5   50
// traversePreorder
//		   101
//      6      130
//    5   50

// tree.add(101).add(6).add(100).add(50).add(5);
//		   101
//       6
//   5     100
//     50

tree.print();
console.log(tree);

//     5
//  2      6
//            100

// console.log(tree.find(6));
// console.log(tree.find(100));
// console.log(tree.find(1000000));
// console.log(tree.contains(2));
// console.log(tree.contains(17));

// console.log('Inorder ', tree.traverseInOrder());
// console.log('Preorder  ', tree.traversePreorder());
console.log('Postorder ', tree.traversePostorder());
tree.print();
