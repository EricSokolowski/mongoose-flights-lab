import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})
//GEt /flghts/new
router.get('/new', flightsCtrl.new)


router.post('/', moviesCtrl.create)
export {
  router,
}
