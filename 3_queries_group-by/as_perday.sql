SELECT day as Day, count(content) AS total_assignments
FROM assignments
GROUP BY day
ORDER BY day ASC