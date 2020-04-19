const {Hop} = require('../models')

module.exports = {
    async addhop (req, res) {
      try {
        const hop = await Hop.create(req.body)
        res.send(hop.toJSON())
      } catch(err) {
        res.status(400).send({
            error: 'Theres an error'
        })
      }
    },
    async retrievehops (req, res) {
      try {
        await Hop.findAll().then(function (hops) {
          res.json(hops)
      });
      } catch(err) {
        res.status(400).send({
          error: 'Theres an error'
        })
      }
    },
    async retrievehop (req, res) {
      try {
        const hopId = req.params.id
        console.log(hopId)
        const hop = await Hop.findOne({
          where: {
            hopId: hopId
          }
        })
        if(!hop) {
          res.status(403).send({
            error: 'No hop found with id'
          })
        }
        const hopJson = hop.toJSON()
        res.send(hopJson)
      } catch(err) {
        res.status(500).send({
          error: 'An error occured'
        })
      }
    }
}