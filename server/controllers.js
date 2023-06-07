const { query } = require('../db/models');

module.exports.get = {

  member: (req, res) => {
    query.findMember(req.query.member_id)
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
  gig: (req, res) => {
    query.addGig(req.body)
      .then(results => {
        res.status(201).send('successfully posted')
      })
      .catch(err => {
        res.sendStatus(402)
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