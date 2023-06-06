const { db } = require('./index');

module.exports.query = {
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