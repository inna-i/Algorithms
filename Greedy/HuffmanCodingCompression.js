/*
 * This is an implementation of the Huffman-algorithm.
 * Huffman-coding is an algorithm for lossless data compression. It was
 * first published by David A. Huffman in 1952.
 * The algorithm returns a binary code-word for every source symbol. Like
 * most encoding methods, the words for often used symbols are shorter than
 * the ones for not so commonly used symbols. The result is a optimal prefix-
 * free code.
 * For more information see https://en.wikipedia.org/wiki/Huffman_coding.
 */

class Node {
  constructor(count, char, left, right) {
    this.count = count;
    this.char = char;
    this.left = left;
    this.right = right;
  }
}

class HuffmanCoding {
  constructor() {
    this.code = {};
    this.leafs = null;
    this.histogram = {};
    this.tree = null;
  }

  createHistogram(input) {
    const histogram = {};

    for (let i = 0; i < input.length; i++) {
      const code = input.charCodeAt(i);
      ++histogram[code];
    }

    this.histogram = histogram;
  }

  // creates the forest with one tree for every char
  createLeafs(histogram) {
    this.leafs = Object.entries(histogram).map(([code, freq]) => {
      const char = String.fromCharCode(code);
      return new Node(freq, char, null, null);
    });
  }

  // splits trees into small and big
  splitTrees(forest) {
    const sorted = forest.sort((a, b) => a.count - b.count);
    const small = sorted.slice(0, 2);
    const big = sorted.slice(2);
    return [small, big];
  }

  createTree(forest) {
    if (forest.length === 1) return forest[0];
    const [small_trees, big_trees] = this.splitTrees(forest);
    const new_tree = new Node(
      small_trees[0].count + small_trees[1].count,
      null,
      small_trees[0],
      small_trees[1]
    );
    const new_trees = [...big_trees, new_tree];

    return this.createTree(new_trees);
  }

  isASCII(str) {
    const test = /^[\x00-\x7F]*$/.test(str);
    return test;
  }

  // Creates the code-words from the created huffman-tree
  createCode(prefix, node) {
    // empty root node
    if (!node) return {};
    // leaf node
    if (!node.left && !node.right) {
      return { [node.char]: prefix };
    }
    // recursive call
    return {
      ...this.createCode(prefix + "0", node.left),
      ...this.createCode(prefix + "1", node.right),
    };
  }

  encode(string) {
    if (!this.isASCII(string)) {
        return 'Invalid text';
    }

    this.createHistogram(string);
    this.createLeafs(this.histogram);
    const tree = this.createTree(this.leafs);
    const code = this.createCode("", tree);

    const encoded = Array.from(string).map((c) => code[c]);

    return {
        output: encoded,
        code,
      };
  }
}

const huff = new HuffmanCoding();
console.log(huff.encode('Hello there'));
