const {Bid} = require('../models')

module.exports = {
    async retrievebids (req, res) {
        try {
          const anybids = await Bid.findAll().then(function (bids) {
            res.json(bids)
          })
          if(!anybids) {
            res.status(403).send({
                error: 'No bids found'
            })
          }
        } catch(err) {
          console.log(err)
          res.status(400).send({
              error: 'Failed to retrieve bid'
          })
        }
    },
    async addbid (req, res) {
      try {
        console.log(req.body)
        const bid = await Bid.create(req.body)
        res.send(bid.toJSON())
      } catch(err) {
        res.status(400).send({
            error: 'Failed to create bid'
        })
      }
    }
}