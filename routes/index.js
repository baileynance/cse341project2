const router = require('express').Router();

// router.use("/", require("./swagger"));

router.get('/', (req, res) => {
  //#swagger.tags=["Hello World"]
  res.send('Hello, world');
});

router.use('/accounts', require('./accounts'));
router.use('/shows', require('./shows'));

module.exports = router;