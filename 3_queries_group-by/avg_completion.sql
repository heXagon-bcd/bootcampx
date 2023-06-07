SELECT students.name as name, AVG(assignment_submissions.duration) as avg_assignment_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY name
ORDER BY avg_assignment_duration DESC
