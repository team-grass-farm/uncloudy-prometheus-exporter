const {
  NODE_TOTAL_BYTE,
  POD_TOTAL_BYTE,
  RANGE_TYPE,
  INSTANCE_TYPE,
  RESOURCE_NAME,
} = require('../constants/common');
const RANGE = require('../constants/range');

const getRandomValue = (instanceType, resourceName) => {
  const isNormal = Math.random() > 0.03;
  const rangeType = isNormal ? RANGE_TYPE.NORMAL : RANGE_TYPE.OVERLOAD;
  const totalByte =
    instanceType === INSTANCE_TYPE.NODE ? NODE_TOTAL_BYTE : POD_TOTAL_BYTE;
  const { start, end } = RANGE[rangeType][instanceType][resourceName];
  let rand = 0;

  for (let i = 0; i < 6; i += 1) {
    rand += Math.random();
  }

  let randomValue = start + (rand / 6) * (end - start);

  if (randomValue < 0) randomValue = 0;
  if (randomValue > 1) randomValue = 1;

  if (resourceName === RESOURCE_NAME.MEMORY_USAGE_BYTES) {
    return parseInt(totalByte * randomValue);
  }
  return randomValue;
};

module.exports = getRandomValue;
