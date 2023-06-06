SELECT name, id, email, cohort_id
from students
WHERE email NOT LIKE '%gmail%'
AND phone IS NULL