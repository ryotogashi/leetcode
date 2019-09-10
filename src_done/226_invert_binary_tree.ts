import TreeNode from "../src/utilities/tree_node";

/**
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  if (!root!.left && !root!.right) return root;
  const tempNode: TreeNode | null = root!.left;
  root!.left = root!.right;
  root!.right = tempNode;

  invertTree(root!.left);
  invertTree(root!.right);

  return root;
}

describe("invert tree", () => {
  test("#1", () => {
    const head: TreeNode = new TreeNode(4);
    head.left = new TreeNode(2);
    head.right = new TreeNode(7);
    head.left.left = new TreeNode(1);
    head.left.right = new TreeNode(3);
    head.right.left = new TreeNode(6);
    head.right.right = new TreeNode(9);

    const ansHead: TreeNode = new TreeNode(4);
    ansHead.left = new TreeNode(7);
    ansHead.right = new TreeNode(2);
    ansHead.left.left = new TreeNode(9);
    ansHead.left.right = new TreeNode(6);
    ansHead.right.left = new TreeNode(3);
    ansHead.right.right = new TreeNode(1);

    invertTree(head);

    expect(head.val === ansHead.val).toBe(true);
    expect(head.left.val === ansHead.left.val).toBe(true);
    expect(head.right.val === ansHead.right.val).toBe(true);
    expect(head.left.left.val === ansHead.left.left.val).toBe(true);
    expect(head.left.right.val === ansHead.left.right.val).toBe(true);
    expect(head.right.left.val === ansHead.right.left.val).toBe(true);
    expect(head.right.right.val === ansHead.right.right.val).toBe(true);
  });
});