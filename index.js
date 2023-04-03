const client = require('prom-client');
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const spec = require('./swagger/swagger.json');

const {
  customNodeCpuUsage,
  customNodeCpuSpec,
  customNodeMemorySpec,
  customNodeMemoryUsageBytes,
  customNodeMemoryUsage,
  customNodeDiskLatency,
} = require('./metric/node/index.js');
const {
  customPodCpuUsage,
  customPodCpuSpec,
  customPodMemorySpec,
  customPodMemoryUsageBytes,
  customPodMemoryUsage,
  customPodDiskLatency,
} = require('./metric/pod/index.js');

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

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
