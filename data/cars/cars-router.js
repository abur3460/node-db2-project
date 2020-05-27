const router = require("express").Router();
const db = require("../dbConfig");

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "failed to get cars" });
  }
});

router.post("/", async (req, res) => {
  const carData = req.body;
  try {
    const newCar = await db("cars").insert(carData);
    res.status(201).json({ message: "created successfully" });
  } catch (err) {
    res.status(500).json({ message: "failed to create post" });
  }
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      res.status(200).json({
        mesg: `${count} records removed`,
      });
    })
    .catch((error) => {
      res.status(500).json({
        errorMsg: `Error removing the car. ${error}`,
      });
    });
});

router.put("/:id", (req, res) => {
  const updates = req.body;
  // validating
  db("cars")
    .where({ id: req.params.id })
    .update(updates)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({
          mesg: `${count} records updated`,
        });
      } else {
        res.status(404).json({
          errorMsg: `Car was not found`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        errorMsg: `Error updating the car. ${error}`,
      });
    });
});

module.exports = router;
