import G6 from '@antv/g6';
import { traverseAddPrefix } from './utils';

let idx = 0;
const menu = new G6.Menu({
  offsetX: 6,
  offsetX: 10,
  itemTypes: ['node'],
  // className: 'menu',
  getContent(e) {
    const outDiv = document.createElement('div');
    outDiv.style.width = '180px';
    outDiv.innerHTML = `<div>
    <div style="padding: 10px 0">添加输入</div>
    <div style="padding: 10px 0">复制</div>
    <div style="padding: 10px 0">删除</div>
    </div>`;
    return outDiv;
  },
  handleMenuClick(target, item, graph) {
    const model = item.getModel();
    const inEdge = item.getInEdges()[0];
    const parentNode = inEdge.getSource();
    console.log('parentNode', parentNode);

    if (target.innerText.includes('添加输入')) {
      const data = {
        id: 'new' + idx,
      };
      idx++;
      graph.addChild(data, item);
    }
    if (target.innerText.includes('复制')) {
      let newItem = {
        id: model.id + 'copy' + idx,
        children: model.children,
      };
      idx++;
      // 简单copy
      newItem = JSON.parse(JSON.stringify(newItem));
      newItem = traverseAddPrefix(newItem, 'copy', idx);

      graph.addChild(newItem, parentNode);
    }
    if (target.innerText.includes('删除')) {
      graph.set('animate', false);
      graph.removeChild(model.id);
      graph.set('animate', true);
    }
  },
});

export { menu };
