import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'New Flight',
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title:'Flights',
      flights: flights
    })
  })
  .catch(err => {
    console.log(err)
    res.render('/')
  })
}
function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

function show(req,res){
  Flight.findById(req.params.id)
  .populate('meals')
  .then(flight => {
    Meal.find({_id: {$nin: flight.meals}})
    .then(meals => {
      res.render('flights/show',{
        title:"Flight Details",
        flight:flight,
        meals: meals
      })
    })
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    res.render('flights/edit',{
      title:"Edit Flight",
      flight:flight
    })
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

function update(req,res){
  Flight.findByIdAndUpdate(req.params.id,req.body, {new:true})
  .then(flight =>{
    res.redirect(`/flights/${flight._id}`)
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/')
  })
}

function createTicket(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() =>{
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch( err =>{
    console.log(err)
    res.redirect('/flights/new')
  })
}

function addMeal(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(()=>{
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update,
  createTicket,
  addMeal,
}