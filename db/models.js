const { db } = require('./index');

module.exports.query = {
  addMember: (member_info) => {
    let args = Object.values(member_info)
    return db.query(`
    INSERT INTO members (name, email, password)
    VALUES ('"${args[0]}"', '"${args[1]}"', '"${args[2]}"')
    `)
  },
  verify: (email) => {
    return db.query(`
    SELECT email, password FROM members WHERE email = '"${email}"'
    `)
  },
  findMember: (email) => {
    return db.query(`
    SELECT member_id, name, email, role, bands FROM members WHERE email = '"${email}"'
    `)
  },
  findAllMembers: (band_id) => {
    return db.query(`
    SELECT member_id, name, email, role, bands FROM members WHERE EXISTS (
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
      SELECT * FROM gigs WHERE band = ${band_id}
    `)
  },
  addGig: (data) => {
    let args = Object.values(data)
    return db.query(`
    BEGIN;
      INSERT INTO gigs (gig_name, date, location, gear_needed, band)
        VALUES ('"${args[0]}"','"${args[1]}"','"${args[2]}"','"${args[3]}"',${args[4]});
      UPDATE bands SET gigs = gigs + 1 WHERE band_id = ${args[4]};
    COMMIT;
    `)
  },
  removeGig: (gig_id, band_id) => {
    return db.query(`
    BEGIN;
      DELETE FROM gigs WHERE gig_id = ${gig_id};
      UPDATE bands SET gigs = gigs - 1 WHERE band_id = ${band_id};
    COMMIT;
    `)
  }
}