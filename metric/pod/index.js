const { customPodCpuSpec } = require('./customPodCpuSpec');
const { customPodCpuUsage } = require('./customPodCpuUsage');
const { customPodDiskLatency } = require('./customPodDiskLatency');
const { customPodMemorySpec } = require('./customPodMemorySpec');
const { customPodMemoryUsage } = require('./customPodMemoryUsage');
const { customPodMemoryUsageBytes } = require('./customPodMemoryUsageBytes');

module.exports = {
  customPodCpuSpec,
  customPodCpuUsage,
  customPodDiskLatency,
  customPodMemorySpec,
  customPodMemoryUsage,
  customPodMemoryUsageBytes,
};
