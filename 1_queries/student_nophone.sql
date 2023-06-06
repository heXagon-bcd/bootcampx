SELECT name, id, cohort_id
from students
WHERE phone IS NULL
or email IS NULL;