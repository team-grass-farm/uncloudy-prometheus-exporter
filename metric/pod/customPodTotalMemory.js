const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const { INTERVAL_TIME, METRIC_NAME } = require('../constants/common');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodTotalMemory = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_POD_TOTAL_MEMORY,
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, Math.random());
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customPodTotalMemory };
