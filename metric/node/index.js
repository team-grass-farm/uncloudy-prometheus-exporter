const { customNodeCpuSpec } = require('./customNodeCpuSpec');
const { customNodeCpuUsage } = require('./customNodeCpuUsage');
const { customNodeDiskLatency } = require('./customNodeDiskLatency');
const { customNodeMemorySpec } = require('./customNodeMemorySpec');
const { customNodeMemoryUsage } = require('./customNodeMemoryUsage');
const { customNodeMemoryUsageBytes } = require('./customNodeMemoryUsageBytes');

module.exports = {
  customNodeCpuSpec,
  customNodeCpuUsage,
  customNodeDiskLatency,
  customNodeMemorySpec,
  customNodeMemoryUsage,
  customNodeMemoryUsageBytes,
};
