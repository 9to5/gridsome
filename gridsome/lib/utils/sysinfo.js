const physical = require('physical-cpu-count')
const os = require('os')
const cpus = os.cpus()

module.exports = {
  cpus: {
    model: cpus.length ? cpus[0].model : '',
    logical: 1,
    physical: 1
  }
}
