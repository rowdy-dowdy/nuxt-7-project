const { randomFillSync } = require('crypto');
const { v4 } = require('uuid');

const random = (() => {
  const buf = Buffer.alloc(16);
  return () => randomFillSync(buf).toString('hex');
})();

const checkTime = () => {
  var s1 = performance.now()
  let i = random()
  var e1 = performance.now()

  console.log(i, e1 - s1)

  var s2 = performance.now()
  let i2 = v4()
  var e2 = performance.now()

  console.log(i2, e2 - s2)
}

checkTime()