const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodTotalMemory = (register) => {
  const metricConfig = getMetricConfig(
    'custom_pod_total_memory',
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, Math.random());
    });
  }, 100);

  register.registerMetric(g);
};

module.exports = { customPodTotalMemory };
