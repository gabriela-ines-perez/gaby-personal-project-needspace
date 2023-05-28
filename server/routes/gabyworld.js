const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const viewData = {
    needs: await db.getNeeds(),
    title: 'gabyworld',
  }
  console.log(viewData)
  res.render('home', viewData)
})
//add new need
router.get('/add-need', async (req, res) => {
  const viewData = {
    // needs: await db.getNeeds(),
    title: 'add need',
  }
  res.render('add-need', viewData)
})

router.post('/add-need', async (req, res) => {
  const { need, expiry, image } = req.body
  await db.addNeed(need, expiry, image)
  res.redirect('/')
})

//update running to true and start timer
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

router.get('/to-running/:id/:time', async (req, res) => {
  const id = req.params.id
  const time = req.params.time

  await db.updateRunningTrue(id)
  startTimer(id, time)

  res.redirect('/')
})
//update running to false
router.get('/to-stagnant/:id', async (req, res) => {
  const id = req.params.id
  await db.updateRunningFalse(id)
  res.redirect('/')
})

module.exports = router
