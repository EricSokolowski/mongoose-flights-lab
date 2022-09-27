import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  flightNum: Number,
  crew: [String],
  availabeSeats: Boolean,
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}