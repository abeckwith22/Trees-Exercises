/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisitStack = [this.root];
    let sum = 0;

    while (toVisitStack.length){
      let current = toVisitStack.pop();
      if(current){
        sum += current.val;
  
        for (let child of current.children){
          toVisitStack.push(child);
        }
      }else{
        return sum;
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisitQueue = [this.root];
    let evensCount = 0;

    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      if(current){
        if(current.val % 2 === 0) { // if current.val is even add one to evensCount
          evensCount++;
        }
        for(let child of current.children){ // add node's children to queue
          toVisitQueue.push(child);
        }
      }else{
        return evensCount;
      }
    }
    return evensCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toVisitStack = [this.root];
    let numsLargerThanLB = 0;
    while(toVisitStack.length){
      let current = toVisitStack.pop();
      if(current){
        if(current.val > lowerBound){
          numsLargerThanLB++;
        }
        for(let child of current.children){ // add node's children to stack
          toVisitStack.push(child);
        }
      }else{
        return numsLargerThanLB;
      }
    }
    return numsLargerThanLB;
  }
}

module.exports = {
  Tree,
  TreeNode
};