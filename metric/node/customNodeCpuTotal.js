const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const { INTERVAL_TIME, METRIC_NAME } = require('../constants/common');
const { NODE_LABEL_NAMES } = require('../constants/labelName');
const { nodes } = require('../constants/nodes');

const customNodeCpuTotal = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_NODE_CPU_TOTAL,
    NODE_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    nodes.forEach((node) => {
      g.set(node, Math.random());
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customNodeCpuTotal };
