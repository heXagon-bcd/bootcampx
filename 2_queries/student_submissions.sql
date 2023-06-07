SELECT students.name AS name, count(assignment_submissions.assignment_id) AS submissions
FROM students
INNER JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING count(assignment_submissions.assignment_id) < 100;