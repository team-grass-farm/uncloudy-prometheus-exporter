const client = require('prom-client');
const express = require('express');

const { customPodCpuUsage } = require('./metric/pod/customPodCpuUsage');
const { customPodMemoryUsage } = require('./metric/pod/customPodMemoryUsage');
const {
  customPodMemoryUsageBytes,
} = require('./metric/pod/customPodMemoryUsageBytes');

const { customNodeCpuUsage } = require('./metric/node/customNodeCpuUsage');

const { customPodDiskLatency } = require('./metric/pod/customPodDiskLatency');
const {
  customNodeDiskLatency,
} = require('./metric/node/customNodeDiskLatency');
const {
  customNodeMemoryUsage,
} = require('./metric/node/customNodeMemoryUsage');
const {
  customNodeMemoryUsageBytes,
} = require('./metric/node/customNodeMemoryUsageBytes');
const { customPodCpuSpec } = require('./metric/pod/customPodCpuSpec');
const { customNodeCpuSpec } = require('./metric/node/customNodeCpuSpec');
const { customPodMemorySpec } = require('./metric/pod/customPodMemorySpec');
const { customNodeMemorySpec } = require('./metric/node/customNodeMemorySpec');

const app = express();

// Create a Registry to register the metrics
const register = new client.Registry();

// Other custom metrics and its usage

// pod metrics
customPodCpuUsage(register);
customPodCpuSpec(register);
customPodMemorySpec(register);
customPodMemoryUsageBytes(register);
customPodMemoryUsage(register);
customPodDiskLatency(register);

// node metrics
customNodeCpuUsage(register);
customNodeCpuSpec(register);
customNodeMemorySpec(register);
customNodeMemoryUsageBytes(register);
customNodeMemoryUsage(register);
customNodeDiskLatency(register);

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// Start the Express server and listen to a port
app.listen(8080, () => {
  console.log(
    'Server is running on http://localhost:8080, metrics are exposed on http://localhost:8080/metrics'
  );
});
