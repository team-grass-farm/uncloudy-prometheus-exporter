const INTERVAL_TIME = 15000;

const NODE_TOTAL_BYTE = 17179869184;
const POD_TOTAL_BYTE = 2147483648;

const RANGE_TYPE = {
  NORMAL: 'normal',
  OVERLOAD: 'overload',
};

const INSTANCE_TYPE = {
  NODE: 'node',
  POD: 'pod',
};

const RESOURCE_NAME = {
  CPU_USAGE: 'cpuUsage',
  MEMORY_USAGE: 'memoryUsage',
  MEMORY_USAGE_BYTES: 'memoryUsageBytes',
  DISK_LATENCY: 'diskLatency',
};

const METRIC_NAME = {
  // node
  CUSTOM_NODE_CPU_TOTAL: 'custom_node_cpu_total',
  CUSTOM_NODE_CPU_USAGE: 'custom_node_cpu_usage',
  CUSTOM_NODE_DISK_LATENCT: 'custom_node_disk_latency',
  CUSTOM_NODE_MEMORY_USAGE: 'custom_node_memory_usage',
  CUSTOM_NODE_MEMORY_USAGE_BYTES: 'custom_node_memory_usage_bytes',
  CUSTOM_NODE_TOTAL_MEMORY: 'custom_node_total_memory',
  // pod
  CUSTOM_POD_CPU_USAGE: 'custom_pod_cpu_usage',
  CUSTOM_POD_DISK_LATENCY: 'custom_pod_disk_latency',
  CUSTOM_POD_MEMORY_USAGE: 'custom_pod_memory_usage',
  CUSTOM_POD_MEMORY_USAGE_BYTES: 'custom_pod_memory_usage_bytes',
  CUSTOM_POD_TOTAL_MEMORY: 'custom_pod_total_memory',
};

module.exports = {
  INTERVAL_TIME,
  NODE_TOTAL_BYTE,
  POD_TOTAL_BYTE,
  RESOURCE_NAME,
  INSTANCE_TYPE,
  RANGE_TYPE,
  METRIC_NAME,
};
