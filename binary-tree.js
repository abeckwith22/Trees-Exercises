/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // run a queue to check each values children,
  // if currValues children.length === 0, return depth;
  minDepth() {

    const stack = [this.root];
    let currentDepth = 1;
    let minDepth = Infinity;
    let iteration = 0;
    
    if(!this.root){
      return 0;
    }
    
    // running an iterative in-order traversal
    while(stack.length){
      let current = stack.pop();
      const right = current.right;
      const left = current.left;

      // console.log(`---------- Iteration #${iteration} ----------`);
      // console.log(`current:${JSON.stringify(current)}`);
      // console.log(`current_right:${JSON.stringify(right)}`);
      // console.log(`current_left:${JSON.stringify(left)}`);
      // console.log(`Current Depth: ${currentDepth}`);
      
      currentDepth++;
      
      if(right){ // exists; push right to stack
        stack.push(current.right);
      }
      if(left){ // exists; push left to stack
        stack.push(current.left);
      }

      if(!right && !left){ // right & left are null values then we calculate the depth
        if(currentDepth < minDepth) minDepth = currentDepth;
        currentDepth = 1;
      }
      iteration++;
    }

    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const stack = [this.root];
    let currentDepth = 0;
    let maxDepth = 0;
    let iteration = 0;
    
    if(!this.root){
      return 0;
    }
    
    // running an iterative in-order traversal
    while(stack.length){
      let current = stack.pop();
      const right = current.right;
      const left = current.left;
      
      currentDepth++;
      
      if(right){ // exists; push right to stack
        stack.push(current.right);
      }
      if(left){ // exists; push left to stack
        stack.push(current.left);
      }

      if(!right && !left){ // right & left are null values then we calculate the depth
        if(currentDepth > maxDepth) maxDepth = currentDepth;
        currentDepth = 1;
      }
      iteration++;
    }

    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    if(!this.root){ // root is empty
      return 0;
    }

    const res = [this.root.val];
    
    // return max path sum without split
    const dfs = (root=this.root) => {
      if(!root) return 0;

      let leftMax = dfs(root.left);
      let rightMax = dfs(root.right);
      // update values; if values are negative, then they're not included
      leftMax = Math.max(leftMax, 0);
      rightMax = Math.max(rightMax, 0);
  
      // compute max path sum WITH split
      res[0] = Math.max(res[0], root.val + leftMax + rightMax);
  
      return root.val + Math.max(leftMax, rightMax);
    }
    dfs(this.root);
    return res[0];
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    
    if(!this.root){ // root is empty
      return null;
    }

    let first = Infinity; // highest value after lowerBound
    const stack = [this.root];

    while(stack.length){
      const current = stack.pop();
      const val = current.val;

      if(val < first && val > lowerBound){
        first = val;
      }

      if(current.right){
        stack.push(current.right);
      }
      if(current.left){
        stack.push(current.left);
      }
    }
    if(first === Infinity){ // no value was found less than lowerBound
      return null;
    }
    return first;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
