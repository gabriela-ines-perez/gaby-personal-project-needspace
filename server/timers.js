const runningTimers = {}

function startTimer(id, time) {
  if (runningTimers[id]) {
    clearTimeout(runningTimers[id])
  }

  runningTimers[id] = setTimeout(async () => {
    await db.updateRunningFalse(id)
    delete runningTimers[id]
  }, time)
}

function cancelTimer(id) {
  if (runningTimers[id]) {
    clearTimeout(runningTimers[id])
    delete runningTimers[id]
  }
}

module.exports = {
  startTimer,
  setTimeout,
}
