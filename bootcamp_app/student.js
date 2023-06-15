const { Pool } = require('pg');
const process = require('process');

const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

const cohortName = args[0];
const limit = args[1] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
.then(res => {
  console.log(res)
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and is from cohort ${user.cohort}`)
  })
})
.catch(err => console.error('query error', err.stack));