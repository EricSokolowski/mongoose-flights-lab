import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  flightNum: Number,
  crew: [String],
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}