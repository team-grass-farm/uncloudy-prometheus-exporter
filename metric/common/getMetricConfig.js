const getMetricConfig = (name, labelNames) => {
  return {
    name,
    labelNames,
    help: 'This is my gauge',
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
  };
};

module.exports = getMetricConfig;
