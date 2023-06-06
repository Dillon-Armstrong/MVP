const { db } = require('./index');

module.exports.query = {
  findMember: (member_id) => {
    return db.query(`
    SELECT * FROM members WHERE member_id = ${member_id}
    `)
  },
  findAllMembers: (band_id) => {
    return db.query(`
    SELECT * FROM members WHERE EXISTS (
      SELECT 1 from jsonb_array_elements(bands) AS band
      WHERE band ->> 'band_id' = '${band_id}'
    )
    `)
  },
  getBands: (member_id) => {
    return db.query(`
    SELECT * FROM bands WHERE EXISTS (
      SELECT 1 FROM jsonb_array_elements(members) AS member
      WHERE member ->> 'member_id' = '${member_id}'
    )
    `)
  },
  getGigs: (band_id) => {
    return db.query(`
    select * from gigs where band = ${band_id}
    `)
  }
}