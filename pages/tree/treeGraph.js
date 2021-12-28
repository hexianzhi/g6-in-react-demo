import G6 from '@antv/g6';
import { traverseAddPrefix } from './utils';
import { graphConfig } from './config';
import { menu } from './menu';
import './node';

console.log('graphConfig: ', graphConfig);
const colorMap = {
  color1: '#ffa39e',
  color2: '#ffe58f',
  color3: '#b7eb8f',
};

class treeGraph {
  treeGraph = {};
  originData = []; // 原始数据
  data = []; // 格式化后的数据

  constructor(props) {
    console.log('props: ', props);
    // super(props);
    this.initData(props);
    this.initGraph(props);
  }

  initGraph(props) {
    this.treeGraph = new G6.TreeGraph({
      container: props.container,
      width: props.container.scrollWidth,
      height: 700,
      plugins: [menu], // 配置 Menu 插件
      ...graphConfig,
    });
  }

  initData(props) {
    // TODO deep clone
    const temp = JSON.parse(JSON.stringify(props.originData));
    this.data = traverseAddPrefix(temp, 'color', 1);
    console.log('data', this.data);
  }

  init() {
    this.addEdgeColor();
    this.treeGraph.data(this.data);
    this.treeGraph.render();
    this.treeGraph.fitView();
    this.bindAllEvent();
  }

  addEdgeColor() {
    // 展开子节点也会响应
    console.log(' this.treeGraph', this.treeGraph);
    this.treeGraph.edge((edge) => {
      const str = edge.id.match(/color\d{1,2}/g);
      if (str) {
        return {
          ...edge,
          id: edge.id,
          type: 'cubic-horizontal',

          style: {
            stroke: colorMap[str[0]],
          },
        };
      }
    });
  }

  bindAllEvent() {
    this.bindEvent('node:click', this.onNodeClick);
  }

  bindEvent(name, cb) {
    this.treeGraph.on(name, cb);
  }

  onNodeClick() {
    // 先将所有当前是 click 状态的节点置为非 click 状态
    const clickNodes = this.treeGraph.findAllByState('node', 'click');
    clickNodes.forEach((cn) => {
      this.treeGraph.setItemState(cn, 'click', false);
    });
    const nodeItem = e.item; // 获取被点击的节点元素对象
    // this.treeGraph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
    // nodeItem.
    // const model = {
    //   id: 'test1',
    // };
    // console.log('click nodeItem', nodeItem);
    // nodeItem.update(model);
    // nodeItem.hide(); // work
  }
}

export default treeGraph;
