const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const getRandomValue = require('../common/randomValue');
const {
  INTERVAL_TIME,
  METRIC_NAME,
  INSTANCE_TYPE,
  RESOURCE_NAME,
} = require('../constants/common');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodDiskLatency = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_POD_DISK_LATENCY,
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, getRandomValue(INSTANCE_TYPE.POD, RESOURCE_NAME.DISK_LATENCY));
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customPodDiskLatency };
