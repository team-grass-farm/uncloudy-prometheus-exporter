const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const getRandomValue = require('../common/randomValue');
const {
  INTERVAL_TIME,
  METRIC_NAME,
  INSTANCE_TYPE,
  RESOURCE_NAME,
} = require('../constants/common');
const { NODE_LABEL_NAMES } = require('../constants/labelName');
const { nodes } = require('../constants/nodes');

const customNodeMemoryUsage = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_NODE_MEMORY_USAGE,
    NODE_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    nodes.forEach((node) => {
      g.set(
        node,
        getRandomValue(INSTANCE_TYPE.NODE, RESOURCE_NAME.MEMORY_USAGE)
      );
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customNodeMemoryUsage };
