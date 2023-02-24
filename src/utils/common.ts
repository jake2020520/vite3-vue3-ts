const deepMap = (item: any) => {
  if (item.isLeaf === true) {
    item.children = null;
  }
  if (item.children && item.children.length > 0) {
    item.children.map((subItem: any) => deepMap(subItem));
  }
  return item;
};

// 深度遍历, 使用递归,查找第一个存在的叶子节点
function handleLeaf(data: any) {
  const result = data.map((item: any) => {
    return deepMap(item);
  });
  return result;
}

export { handleLeaf };
