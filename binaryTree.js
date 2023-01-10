// use a recursive function that traverses the tree and swaps the children of each node
//  traverse its children

// create a simple TreeNode class which have a constructor
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function invertTree(root) {
    // if the current root is null,
    //  return null
    if (!root) {
      return null;
    }
  
    // Swapping the left and right children of the current node
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively call invertTree on the left and right children of the current node
    invertTree(root.left);
    invertTree(root.right);
  
    // Return the inverted tree
    return root;
  }
  
  // here is an example of its usage:
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  //original
  console.log(root);
  
 //inverted
  console.log(invertTree(root));
  