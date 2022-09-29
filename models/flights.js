import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  seat:  {type: String, match: /[A-F][1-9]\d?/},
  price: Number >= 0,
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}