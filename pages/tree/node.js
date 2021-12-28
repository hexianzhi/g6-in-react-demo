import G6 from "@antv/g6";

const fontSize = 15;

G6.registerNode("crect", {
  draw: (cfg, group) => {
    console.log("cfg", cfg);
    const width = cfg.id.length * 10;
    const rect = group.addShape("rect", {
      attrs: {
        x: 0,
        y: -10,
        ...cfg.style,
        width,
        height: 20,
        lineWidth: 0,
        opacity: 0,
      },
      name: "rect-shape",
      draggable: true,
    });
    const label = group.addShape("text", {
      attrs: {
        text: cfg.id,
        fill: "#d3dd",
        fontSize,
        x: 0,
        y: 0,
      },
      name: "label-shape",
      draggable: true,
    });
    const labelBBox = label.getBBox();
    const icon = group.addShape("circle", {
      attrs: {
        x: labelBBox.maxX + 10,
        y: (labelBBox.minY + labelBBox.maxY) / 2,
        r: 5,
        stroke: "#000",
      },
      name: "circle-shape",
      draggable: true,
    });
    const bboxWidth = label.getBBox().width + 20;
    rect.attr({ width: bboxWidth });
    // 画文本下的线
    group.addShape("path", {
      attrs: {
        lineWidth: 1,
        fill: "#ccc",
        stroke: "#ccc",
        path: [
          ["M", 0, 0],
          ["L", bboxWidth, 0],
        ],
      },
      name: "path-shape",
      draggable: true,
    });

    return rect;
  },
  getAnchorPoints: (type, cfg) => {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
