// 注意id重复后渲染会失败
const traverseAddPrefix = (data, prefix, idx, isChild) => {
  if (!data.children) return data || [];
  data.children = data.children.map((c) => {
    const newID = c.id + ` ${prefix}${idx}`;
    if (c.children) {
      c = traverseAddPrefix(c, prefix, idx, true);
    }
    if (prefix === 'copy') {
      idx++;
    } else if (prefix === 'color' && !isChild) {
      idx++;
      if (prefix === 'color' && idx > 3) {
        idx = 1;
      }
    }

    return { id: newID, children: c.children };
  });
  return data;
};

export { traverseAddPrefix };
