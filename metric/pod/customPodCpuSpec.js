const promClient = require('prom-client');

const getMetricConfig = require('../common/getMetricConfig');
const {
  METRIC_NAME,
  INTERVAL_TIME,
  POD_CPU_SPEC,
} = require('../constants/common');
const { POD_LABEL_NAMES } = require('../constants/labelName');
const { pods } = require('../constants/pods');

const customPodCpuSpec = (register) => {
  const metricConfig = getMetricConfig(
    METRIC_NAME.CUSTOM_POD_CPU_SPEC,
    POD_LABEL_NAMES
  );
  const g = new promClient.Gauge(metricConfig);

  setInterval(() => {
    pods.forEach((pod) => {
      g.set(pod, POD_CPU_SPEC[pod.instance + '-' + pod.pod]);
    });
  }, INTERVAL_TIME);

  register.registerMetric(g);
};

module.exports = { customPodCpuSpec };
