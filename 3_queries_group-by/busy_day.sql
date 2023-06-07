SELECT day, count(content)
FROM assignments
GROUP BY day
HAVING count(content) >= 10
ORDER BY day ASC