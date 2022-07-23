const { RANGE_TYPE, INSTANCE_TYPE, RESOURCE_NAME } = require('./common');

const RANGE = {
  [RANGE_TYPE.NORMAL]: {
    [INSTANCE_TYPE.NODE]: {
      [RESOURCE_NAME.CPU_USAGE]: {
        start: -0.25,
        end: 0.75,
      },
      [RESOURCE_NAME.MEMORY_USAGE]: {
        start: 0,
        end: 0.2,
      },
      [RESOURCE_NAME.MEMORY_USAGE_BYTES]: {
        start: 0,
        end: 0.2,
      },
      [RESOURCE_NAME.DISK_LATENCY]: {
        start: -0.65,
        end: 0.85,
      },
    },
    [INSTANCE_TYPE.POD]: {
      [RESOURCE_NAME.CPU_USAGE]: {
        start: -0.1,
        end: 0.9,
      },
      [RESOURCE_NAME.MEMORY_USAGE]: {
        start: 0,
        end: 0.4,
      },
      [RESOURCE_NAME.MEMORY_USAGE_BYTES]: {
        start: 0,
        end: 0.4,
      },
      [RESOURCE_NAME.DISK_LATENCY]: {
        start: 0.025,
        end: 0.075,
      },
    },
  },
  [RANGE_TYPE.OVERLOAD]: {
    [INSTANCE_TYPE.NODE]: {
      [RESOURCE_NAME.CPU_USAGE]: {
        start: 0.5,
        end: 0.95,
      },
      [RESOURCE_NAME.MEMORY_USAGE]: {
        start: 0.3,
        end: 0.7,
      },
      [RESOURCE_NAME.MEMORY_USAGE_BYTES]: {
        start: 0.3,
        end: 0.7,
      },
      [RESOURCE_NAME.DISK_LATENCY]: {
        start: -0.65,
        end: 0.85,
      },
    },
    [INSTANCE_TYPE.POD]: {
      [RESOURCE_NAME.CPU_USAGE]: {
        start: 0.5,
        end: 1.1,
      },
      [RESOURCE_NAME.MEMORY_USAGE]: {
        start: 0.2,
        end: 0.4,
      },
      [RESOURCE_NAME.MEMORY_USAGE_BYTES]: {
        start: 0.2,
        end: 0.4,
      },
      [RESOURCE_NAME.DISK_LATENCY]: {
        start: 0.025,
        end: 0.075,
      },
    },
  },
};

module.exports = RANGE;
