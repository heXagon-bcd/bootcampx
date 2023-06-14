const { Pool } = require('pg');
const process = require('process');

const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name as student_name, cohorts.name cohort_name
FROM students
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student_name} has an id of ${user.id} and is from cohort ${user.cohort_name}`)
  })
})
.catch(err => console.error('query error', err.stack));