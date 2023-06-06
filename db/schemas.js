const { db } = require('./index')

db.query(`
Begin;
CREATE TABLE IF NOT EXISTS bands (
  band_id serial PRIMARY KEY,
  band_name JSONB,
  members INTEGER,
  gigs INTEGER
);
CREATE TABLE IF NOT EXISTS gigs (
  gig_id serial PRIMARY KEY,
  gigName JSONB,
  location JSONB,
  date JSONB,
  gear_needed JSONB,
  band INTEGER,
  CONSTRAINT gigs_band_fkey FOREIGN KEY
  (band) REFERENCES bands (band_id));
CREATE TABLE IF NOT EXISTS members (
  member_id serial PRIMARY KEY,
  name JSONB,
  role JSONB,
  bands jsonb
);
COMMIT;
`)
.then(() => {
  console.log('success')
})
.catch(err => {
  console.log(err)
})