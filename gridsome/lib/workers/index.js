const path = require('path')
const sysinfo = require('../utils/sysinfo')
const Worker = require('jest-worker').default

function createWorker (filename) {
  const filepath = path.join(__dirname, filename)
  const workerPath = require.resolve(filepath)

  return new Worker(workerPath, {
    numWorkers: 1,
    forkOptions: {
      stdio: ['pipe', 'pipe', process.stderr, 'ipc']
    }
  })
}

module.exports = {
  createWorker
}
