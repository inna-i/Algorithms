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

	add(value) {
		if(!this.root) {
			this.root = new Node(value);
			return this;
		}

		let temp = this.root;

		while(true) {
			if(temp.value < value) {
				if (!temp.right) {
					temp.right = new Node(value);
					return this;
				}

				temp = temp.right;
			} else {
				if(!temp.left) {
					temp.left = new Node(value);
					return this;
				}

				temp = temp.left;
			}
		}
	}

	find(value) {
		let temp = this.root;

		if(!temp) {
			return null;
		}

		while(true) {
			if(temp.value === value) {
				return temp;
			} else if (temp.value < value) {
				if(!temp.right) {
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

	contains(value) {
		let node = this.find(value);
		if (node) {
			return true;
		}
		return false;
	}


	traversePreorder(node = this.root) {
		return node
			? [node.value, ...this.traversePreorder(node.left), ...this.traversePreorder(node.right)]
			: [];        
	}

	traverseInOrder(node = this.root) {
	   let res = []; 
	   function traverse(node) {
			if (node.left) {
				traverse(node.left)
			} 

			res.push(node.value)

			if (node.right) {
				traverse(node.right)
			}
	   }

	   traverse(node);

	   return res;
	}


	traversePostorder() {
		let res = []; 
		function traverse(node) {
			 if (node.left) {
				 traverse(node.left)
			 } 
 			 
			 if (node.right) {
				 traverse(node.right)
			}

			res.push(node.value)
		}
 
		traverse(this.root);
 
		return res;
	}
}

const tree = new BinarySearchTree();
tree.add(5).add(2).add(6).add(100);

// console.log(tree);

//    5
//  2    6
//         100

console.log(tree.find(2));
console.log(tree.find(100));
console.log(tree.find(1000000));
console.log(tree.contains(2));
console.log(tree.contains(17));

console.log('Preorder  ', tree.traversePreorder());
console.log('Inorder ', tree.traverseInOrder());
console.log('Postorder ', tree.traversePostorder());