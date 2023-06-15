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
select t.name as teacher_name, c.name as cohort_name
from teachers t
join assistance_requests ar on t.id = ar.teacher_id 
join students s on ar.student_id = s.id 
join cohorts c on s.cohort_id = c.id 
where c.name like $1
group by t.name, c.name
LIMIT $2
`;
const cohortName = args[0];
const limit = args[1] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
.then(res => {
  console.log('connected')
  res.rows.forEach(user => {
    console.log(`${user.cohort_name}: ${user.teacher_name}`)
  })
})
.catch(err => console.error('query error', err.stack));