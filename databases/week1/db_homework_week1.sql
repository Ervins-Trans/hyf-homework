--Find out how many tasks are in the task table
SELECT
    count (*) as "task_count"
FROM
    task;
--Find out how many tasks in the task table do not have a valid due date
SELECT
    count (*) as "task_count"
FROM
    task
WHERE
    due_date IS NULL;
--Find all the tasks that are marked as done
SELECT
    task.title AS 'DONE'
FROM
    task
JOIN status ON status.id = task.status_id
WHERE
    status.name = 'Done';
--Find all the tasks that are not marked as done
SELECT
    task.title AS 'not DONE',
    status.name AS 'actual status'
FROM
    task
JOIN status ON status_id = task.status_id
WHERE
    status.name != 'Done';
--Get all the tasks, sorted with the most recently created first
SELECT
    *
FROM
    task
ORDER BY
    created DESC;

--Get the single most recently created task
SELECT
    *
FROM
    task
ORDER BY
    created DESC
LIMIT
    1;
--Get the title and due date of all tasks where the title or description contains database
SELECT
    task.title as 'title',
    task.due_date
FROM
    task
WHERE
    task.title LIKE '%database%' OR
    task.description LIKE '%database%';
--Get the title and status (as text) of all tasks
SELECT
    task.title,
    status.name as 'text'
FROM
    task
JOIN status ON task.status.id = status_id;
--Get the name of each status, along with a count of how many tasks have that status
SELECT
    name as 'status name',
    count (task.id) as 'task count'
FROM
    status
JOIN task ON status.id = task.status_id
GROUP BY
    name;
--Get the names of all statuses, sorted by the status with most tasks first
SELECT
    name as 'status name',
    count (task.id) as 'task count'
FROM
    status
JOIN task ON status.id = task.status_id
GROUP BY
    name
ORDER BY
    count (task.id) DESC;
