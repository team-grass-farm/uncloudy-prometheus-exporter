const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodMemoryUsageBytes = (register) => {
  const metricConfig = getMetricConfig(
    'custom_pod_memory_usage_bytes',
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, parseInt(Math.random() * (Math.random() * 10000000)));
    });
  }, 100);

  register.registerMetric(g);
};

module.exports = { customPodMemoryUsageBytes };
