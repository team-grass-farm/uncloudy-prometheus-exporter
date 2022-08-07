const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const {
  METRIC_NAME,
  NODE_CPU_SPEC,
  INTERVAL_TIME,
} = require('../constants/common');
const { NODE_LABEL_NAMES } = require('../constants/labelName');
const { nodes } = require('../constants/nodes');

const customNodeCpuSpec = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_NODE_CPU_SPEC,
    NODE_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    nodes.forEach((node) => {
      g.set(node, NODE_CPU_SPEC[node.instance]);
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customNodeCpuSpec };
