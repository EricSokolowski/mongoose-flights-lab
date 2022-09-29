import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */

//GEt /flghts/new
router.get('/new', flightsCtrl.new)

router.get('/', flightsCtrl.index)

router.post('/', flightsCtrl.create)

router.delete('/:id', flightsCtrl.delete)

export {
  router,
}
