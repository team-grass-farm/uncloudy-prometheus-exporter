const promClient = require('prom-client');
const getMetricConfig = require('../common/getMetricConfig');
const {
  METRIC_NAME,
  INTERVAL_TIME,
  POD_TOTAL_BYTE,
} = require('../constants/common');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodMemorySpec = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_POD_MEMORY_SPEC,
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, POD_TOTAL_BYTE);
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customPodMemorySpec };
