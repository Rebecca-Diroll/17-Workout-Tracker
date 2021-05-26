const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    }, 
    exercises: [
        {
            type:{
                type: String,
                trim: true,
                required: "Enter the exercise type: "
            }, 
            name: {
                type: String,
                trim: true,
                required: "Enter the exercise name: "
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter the exercise duration in minutes: "
            },
            weight: {
                type: Number,
                trim: true,
                required: "Enter the weight: "
            },  
            reps: {
                type: Number,
                trim: true,
                required: "Enter the number of reps: "
            },
            sets: {
                type: Number,
                trim: true,
                required: "Enter the number of sets: "
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;