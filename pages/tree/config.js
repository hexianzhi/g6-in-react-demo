import G6 from '@antv/g6';
const fontSize = 15;
const graphConfig = {
  modes: {
    default: [
      {
        type: 'collapse-expand',
        onChange: function onChange(item, collapsed) {
          const data = item.getModel();
          data.collapsed = collapsed;
          return true;
        },
      },
      'drag-canvas',
      'zoom-canvas',
    ],
  },
  nodeStateStyles: {
    // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
    hover: {
      fill: 'lightsteelblue',
    },
    // 鼠标点击节点，即 click 状态为 true 时的样式
    click: {
      stroke: '#000',
      lineWidth: 4,
    },
  },
  defaultNode: {
    type: 'crect',
  },
  defaultEdge: {
    type: 'cubic-horizontal',
  },
  layout: {
    type: 'compactBox',
    direction: 'LR',
    getId: function getId(d) {
      // 千万不要动这里
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getVGap: function getVGap() {
      return 10;
    },
    getHGap: function getHGap() {
      return 100;
    },
    getWidth: function getWidth(d) {
      return G6.Util.getTextSize(d.id, fontSize)[0] + 20;
    },
  },
};

export { graphConfig };
