import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import G6 from "@antv/g6";
import treeGraph from "./treeGraph";

const treeData = {
  id: 'test1',

  children: [
    {
      id: 'test2',

      children: [
        {
          id: 'Logistic regressiontest2 ',

          children: [{ id: 'L123sion', children: [{ id: 'L123sionccc' }] }],
        },
        { id: 'Linear discriminant analysis test2' },
        { id: 'Rules test2' },
        { id: 'Decision trees test2' },
        { id: 'Naive Bayes test2' },
        { id: 'K nearest neighbor test2' },
        { id: 'Probabilistic neural networ test2k' },
        {
          id: 'Support vector machine test2',
          children: [
            { id: 'L1qwe23sion', line: 'line1' },
            { id: 'Supqweport vector machine test2' },
          ],
        },
      ],
    },
    {
      id: 'test3',
      children: [
        {
          id: 'Models diversity test3',
          children: [
            { id: 'Different initialization test3' },
            { id: 'Different parameter choices test3' },
            { id: 'Different architectures test3' },
            { id: 'Different modeling methods test3' },
            { id: 'Different training sets test3' },
            { id: 'Different feature sets test3' },
          ],
        },
        {
          id: 'Methods test3',
          children: [
            { id: 'Classifier selection test3' },
            { id: 'Classifier fusion test3' },
          ],
        },
        {
          id: 'Common test3',
          children: [
            { id: 'Bagging test3' },
            { id: 'Boosting test3' },
            { id: 'AdaBoost test3' },
          ],
        },
      ],
    },
    {
      id: 'Regression',
      children: [
        { id: 'Multiple linear regression' },
        { id: 'Partial least squares' },
        {
          id: 'Multi-layer feedforward neural network',
        },
        { id: 'General regression neural network' },
        { id: 'Support vector regression' },
      ],
    },
  ],
};

const TreeGraphReact = () => {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    graph = new treeGraph({ container: ref.current, originData: treeData });
    graph.init();
  }, []);

  const handleChangeData = () => {
    const node = graph.findById("SubTreeNode1");
    graph.updateItem(node, {
      label: "xxx",
      style: {
        fill: "red",
      },
    });
  };

  return (
    <div ref={ref}>
      <Button onClick={handleChangeData} type="primary">
        更新数据源
      </Button>
    </div>
  );
};

export default TreeGraphReact;
