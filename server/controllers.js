const { query } = require('../db/models');
const bcrypt = require('bcryptjs-react');

module.exports.get = {

  member: (req, res) => {
    query.findMember(req.query.email)
      .then(results => {
        res.status(200).send(JSON.stringify(results.rows))
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  },
  allMembers: (req, res) => {
    query.findAllMembers(req.query.band_id)
      .then(results => {
        res.status(200).send(JSON.stringify(results.rows))
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  },
  bands: (req, res) => {
    query.getBands(req.query.member_id)
      .then(results => {
        res.status(200).send(JSON.stringify(results.rows))
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  },
  gigs: (req, res) => {
    query.getGigs(req.query.band_id)
      .then(results => {
        res.status(200).send(JSON.stringify(results.rows))
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  }
}

module.exports.post = {
  login: (req, res) => {
    query.verify(req.body.email)
      .then(results => {
        if (bcrypt.compare(req.body.password, results.rows[0].password)) {
          res.sendStatus(200)
        } else {
          res.sendStatus(406)
        }
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  },
  gig: (req, res) => {
    query.addGig(req.body)
      .then(results => {
        res.status(201).send('successfully posted')
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  },
  user: (req, res) => {
    query.verify(req.body.email)
    .then(results => {
      if (results.rows.length){
        res.sendStatus(406)
      } else {
        query.addMember(req.body)
        .then(results => {
          console.log('results', results)
          res.status(201).send('new member registered')
        })
        .catch(err => {
          res.sendStatus(402)
          throw Error(err);
        })
      }
    })
    .catch(err => {
      res.sendStatus(400)
          throw Error(err);
    })
  }
}

module.exports.delete = {
  gig: (req, res) => {
    query.removeGig(req.query.gig_id, req.query.band_id)
      .then(results => {
        res.status(201).send('item removed');
      })
      .catch(err => {
        res.sendStatus(402)
        throw Error(err);
      })
  }
}