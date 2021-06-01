const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {   
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
    const {body, params} = req;
  Workout.findByIdAndUpdate(
      params.id,
      {$push: {exercises: body}}
    //   {new: true, runValidators: true}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

  module.exports = router;