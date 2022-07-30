const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const { NODE_LABEL_NAMES } = require('../constants/labelName');
const { nodes } = require('../constants/nodes');

const customNodeCpuTotal = (register) => {
  const metricConfig = getMetricConfig(
    'custom_node_cpu_total',
    NODE_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    nodes.forEach((pod) => {
      g.set(pod, Math.random());
    });
  }, 100);

  register.registerMetric(g);
};

module.exports = { customNodeCpuTotal };
